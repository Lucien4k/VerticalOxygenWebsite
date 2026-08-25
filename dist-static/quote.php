<?php
/**
 * Vertical Oxygen — quote request handler for CanSpace (cPanel) hosting.
 *
 * Put this file in the same folder as index.html on your CanSpace account.
 * It receives the "Request a Quote" form, emails you the details (with the
 * customer's photos attached) and sends the customer a confirmation.
 *
 * ---------------------------------------------------------------------------
 * SETUP (2 minutes, in cPanel):
 *   1. cPanel -> Email Accounts -> Create  ->  quotes@verticaloxygen.com
 *   2. Put that same address in $FROM_EMAIL below.
 *   3. Put the inbox you want the leads to land in ($TO_EMAIL below).
 * The From address MUST be a real mailbox on your own domain, otherwise
 * Gmail/Outlook will mark the message as spam or reject it.
 * ---------------------------------------------------------------------------
 */

$TO_EMAIL    = 'verticaloxygen@gmail.com';        // where leads are delivered
$FROM_EMAIL  = 'quotes@verticaloxygen.com';       // real cPanel mailbox on your domain
$FROM_NAME   = 'Vertical Oxygen Website';
$SITE_NAME   = 'Vertical Oxygen';

// --- basic guards ------------------------------------------------------------
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// honeypot — bots fill hidden fields, humans do not
if (!empty($_POST['company_website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function field($key, $max = 2000) {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}

$name      = field('name', 100);
$email     = field('email', 255);
$phone     = field('phone', 30);
$spaceType = field('space_type', 50);
$wallSize  = field('wall_size', 100);
$message   = field('message', 2000);

$errors = [];
if ($name === '')                                     $errors[] = 'Name is required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))       $errors[] = 'A valid email is required';
if ($message === '')                                  $errors[] = 'Message is required';

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode('. ', $errors)]);
    exit;
}

// --- attachments -------------------------------------------------------------
$MAX_FILES     = 6;
$MAX_FILE_SIZE = 10 * 1024 * 1024;   // 10 MB each
$ALLOWED       = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif'];

$attachments = [];
if (!empty($_FILES['photos']) && is_array($_FILES['photos']['name'])) {
    $count = min(count($_FILES['photos']['name']), $MAX_FILES);
    for ($i = 0; $i < $count; $i++) {
        if ((int)$_FILES['photos']['error'][$i] !== UPLOAD_ERR_OK) continue;
        $size = (int)$_FILES['photos']['size'][$i];
        if ($size <= 0 || $size > $MAX_FILE_SIZE) continue;

        $tmp  = $_FILES['photos']['tmp_name'][$i];
        if (!is_uploaded_file($tmp)) continue;

        $type = function_exists('mime_content_type') ? (mime_content_type($tmp) ?: '') : '';
        if ($type === '') $type = (string)$_FILES['photos']['type'][$i];
        if (!in_array(strtolower($type), $ALLOWED, true)) continue;

        $orig = preg_replace('/[^A-Za-z0-9._-]/', '_', basename((string)$_FILES['photos']['name'][$i]));
        $data = file_get_contents($tmp);
        if ($data === false) continue;

        $attachments[] = ['name' => $orig ?: ('photo-' . ($i + 1) . '.jpg'), 'type' => $type, 'data' => $data];
    }
}

// --- build the notification email -------------------------------------------
function h($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

$rows = [
    'Name'       => $name,
    'Email'      => $email,
    'Phone'      => $phone !== '' ? $phone : '—',
    'Space type' => $spaceType !== '' ? $spaceType : '—',
    'Wall size'  => $wallSize !== '' ? $wallSize : '—',
    'Photos'     => count($attachments) . ' attached',
    'Received'   => date('D, d M Y H:i:s T'),
];

$plain = "New quote request from the $SITE_NAME website\n\n";
foreach ($rows as $k => $v) { $plain .= str_pad($k . ':', 13) . $v . "\n"; }
$plain .= "\nMessage:\n" . $message . "\n";

$html  = '<div style="font-family:Helvetica,Arial,sans-serif;color:#1f2421;max-width:620px">';
$html .= '<h2 style="margin:0 0 4px;font-size:20px">New quote request</h2>';
$html .= '<p style="margin:0 0 18px;color:#5b6560;font-size:13px">' . h($SITE_NAME) . ' website</p>';
$html .= '<table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px">';
foreach ($rows as $k => $v) {
    $html .= '<tr><td style="padding:7px 12px 7px 0;color:#5b6560;white-space:nowrap;border-bottom:1px solid #e6eae7">'
          . h($k) . '</td><td style="padding:7px 0;border-bottom:1px solid #e6eae7">' . h($v) . '</td></tr>';
}
$html .= '</table>';
$html .= '<h3 style="margin:22px 0 6px;font-size:15px">Message</h3>';
$html .= '<div style="white-space:pre-wrap;font-size:14px;line-height:1.6">' . h($message) . '</div>';
$html .= '<p style="margin-top:26px"><a href="mailto:' . h($email) . '" style="background:#1f3d2b;color:#fff;'
      . 'padding:10px 18px;border-radius:6px;text-decoration:none;font-size:14px">Reply to ' . h($name) . '</a></p>';
$html .= '</div>';

// --- MIME assembly -----------------------------------------------------------
function send_mime($to, $subject, $plain, $html, $attachments, $fromEmail, $fromName, $replyTo = null) {
    $mixed = '=_mixed_' . bin2hex(random_bytes(12));
    $alt   = '=_alt_'   . bin2hex(random_bytes(12));

    $headers  = 'From: ' . mb_encode_mimeheader($fromName, 'UTF-8') . ' <' . $fromEmail . ">\r\n";
    if ($replyTo) $headers .= 'Reply-To: ' . $replyTo . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= 'Content-Type: multipart/mixed; boundary="' . $mixed . "\"\r\n";

    $body  = "--$mixed\r\n";
    $body .= 'Content-Type: multipart/alternative; boundary="' . $alt . "\"\r\n\r\n";

    $body .= "--$alt\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($plain)) . "\r\n";

    $body .= "--$alt\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($html)) . "\r\n";
    $body .= "--$alt--\r\n";

    foreach ($attachments as $a) {
        $body .= "--$mixed\r\n";
        $body .= 'Content-Type: ' . $a['type'] . '; name="' . $a['name'] . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= 'Content-Disposition: attachment; filename="' . $a['name'] . "\"\r\n\r\n";
        $body .= chunk_split(base64_encode($a['data'])) . "\r\n";
    }
    $body .= "--$mixed--\r\n";

    return mail($to, mb_encode_mimeheader($subject, 'UTF-8'), $body, $headers, '-f' . $fromEmail);
}

$subject = 'Quote request — ' . $name . ($spaceType !== '' ? ' (' . $spaceType . ')' : '');
$sent = send_mime($TO_EMAIL, $subject, $plain, $html, $attachments, $FROM_EMAIL, $FROM_NAME, $email);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'The message could not be sent. Please email us directly.']);
    exit;
}

// --- confirmation to the customer (best effort) ------------------------------
$cPlain = "Hi " . $name . ",\n\nThanks for reaching out to " . $SITE_NAME . ". We've received your "
        . "request and will be in touch within 1-2 business days.\n\nWhat you sent us:\n" . $message
        . "\n\n— The " . $SITE_NAME . " team\n";
$cHtml  = '<div style="font-family:Helvetica,Arial,sans-serif;color:#1f2421;max-width:560px">'
        . '<h2 style="font-size:20px;margin:0 0 12px">Thanks, ' . h($name) . '</h2>'
        . '<p style="font-size:14px;line-height:1.7">We\'ve received your request and someone from '
        . h($SITE_NAME) . ' will be in touch within 1&ndash;2 business days.</p>'
        . '<div style="margin-top:18px;padding:14px 16px;background:#f4f6f4;border-radius:8px;'
        . 'font-size:13px;white-space:pre-wrap;line-height:1.6">' . h($message) . '</div>'
        . '<p style="font-size:13px;color:#5b6560;margin-top:22px">&mdash; The ' . h($SITE_NAME) . ' team</p></div>';

@send_mime($email, 'We received your request — ' . $SITE_NAME, $cPlain, $cHtml, [], $FROM_EMAIL, $SITE_NAME, $TO_EMAIL);

echo json_encode(['ok' => true]);

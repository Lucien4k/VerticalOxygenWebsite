DROP POLICY IF EXISTS "Anyone can upload quote photos" ON storage.objects;

CREATE POLICY "Anyone can upload quote photos"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'quote-photos'
  AND array_length(storage.foldername(name), 1) IS NULL
  AND lower(storage.extension(name)) IN ('jpg','jpeg','png','webp','gif','heic','heif')
  AND length(name) <= 200
);

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/lib/i18n";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  space_type: z.string().max(50).optional().or(z.literal("")),
  wall_size: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us a bit about your project").max(2000),
});

const MAX_PHOTOS = 6;
const MAX_PHOTO_MB = 10;

/**
 * When the site is exported for self-hosting (CanSpace), the static build sets
 * VITE_QUOTE_ENDPOINT=/quote.php and the form emails through the cPanel mailbox
 * instead of Lovable Cloud.
 */
const QUOTE_ENDPOINT = (import.meta.env['VITE_QUOTE_ENDPOINT'] as string | undefined) || "";


export function QuoteForm() {
  const t = useT();
  const [submitting, setSubmitting] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const valid = files.filter((f) => {
      if (!f.type.startsWith("image/")) {
        toast.error(
          t({
            en: `${f.name} is not an image`,
            fr: `${f.name} n'est pas une image`,
            zh: `${f.name} 不是图片文件`,
            es: `${f.name} no es una imagen`,
            pa: `${f.name} ਇੱਕ ਤਸਵੀਰ ਨਹੀਂ ਹੈ`,
            ar: `${f.name} ليست صورة`,
            hi: `${f.name} एक छवि नहीं है`,
          })
        );
        return false;
      }
      if (f.size > MAX_PHOTO_MB * 1024 * 1024) {
        toast.error(
          t({
            en: `${f.name} is over ${MAX_PHOTO_MB}MB`,
            fr: `${f.name} dépasse ${MAX_PHOTO_MB} Mo`,
            zh: `${f.name} 超过 ${MAX_PHOTO_MB}MB`,
            es: `${f.name} supera los ${MAX_PHOTO_MB}MB`,
            pa: `${f.name} ${MAX_PHOTO_MB}MB ਤੋਂ ਵੱਧ ਹੈ`,
            ar: `${f.name} يتجاوز ${MAX_PHOTO_MB} ميجابايت`,
            hi: `${f.name} ${MAX_PHOTO_MB}MB से अधिक है`,
          })
        );
        return false;
      }
      return true;
    });
    const combined = [...photos, ...valid].slice(0, MAX_PHOTOS);
    setPhotos(combined);
    e.target.value = "";
  };

  const removePhoto = (idx: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      space_type: String(fd.get("space_type") ?? ""),
      wall_size: String(fd.get("wall_size") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message;
      const messages: Record<string, { en: string; fr: string; zh: string; es: string; pa: string; ar: string; hi: string }> = {
        "Name is required": {
          en: "Name is required",
          fr: "Le nom est requis",
          zh: "请填写姓名",
          es: "El nombre es obligatorio",
          pa: "ਨਾਮ ਲਾਜ਼ਮੀ ਹੈ",
          ar: "الاسم مطلوب",
          hi: "नाम आवश्यक है",
        },
        "Enter a valid email": {
          en: "Enter a valid email",
          fr: "Veuillez entrer un e-mail valide",
          zh: "请输入有效的电子邮箱",
          es: "Ingrese un correo electrónico válido",
          pa: "ਇੱਕ ਵੈਧ ਈਮੇਲ ਦਰਜ ਕਰੋ",
          ar: "أدخل بريدًا إلكترونيًا صالحًا",
          hi: "एक मान्य ईमेल दर्ज करें",
        },
        "Tell us a bit about your project": {
          en: "Tell us a bit about your project",
          fr: "Parlez-nous un peu de votre projet",
          zh: "请简单介绍一下您的项目",
          es: "Cuéntenos un poco sobre su proyecto",
          pa: "ਸਾਨੂੰ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਬਾਰੇ ਥੋੜ੍ਹਾ ਦੱਸੋ",
          ar: "أخبرنا قليلاً عن مشروعك",
          hi: "हमें अपने प्रोजेक्ट के बारे में थोड़ा बताएं",
        },
      };
      const fallback = t({
        en: "Please check the form",
        fr: "Veuillez vérifier le formulaire",
        zh: "请检查表单内容",
        es: "Por favor revise el formulario",
        pa: "ਕਿਰਪਾ ਕਰਕੇ ਫਾਰਮ ਦੀ ਜਾਂਚ ਕਰੋ",
        ar: "يرجى مراجعة النموذج",
        hi: "कृपया फ़ॉर्म जाँचें",
      });
      toast.error(issue && messages[issue] ? t(messages[issue]) : fallback);
      return;
    }

    setSubmitting(true);
    try {
      if (QUOTE_ENDPOINT) {
        // Self-hosted mode (e.g. CanSpace): post straight to the PHP mail handler.
        const body = new FormData();
        Object.entries(parsed.data).forEach(([k, v]) => body.append(k, String(v ?? "")));
        photos.forEach((file) => body.append("photos[]", file, file.name));
        const res = await fetch(QUOTE_ENDPOINT, { method: "POST", body });
        const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
        if (!res.ok || !json?.ok) throw new Error(json?.error || `Request failed (${res.status})`);
      } else {
        const photoPaths: string[] = [];
        const stamp = Date.now();
        for (let i = 0; i < photos.length; i++) {
          const file = photos[i];
          const rawExt = (file.name.includes(".") ? file.name.split(".").pop()! : "").toLowerCase();
          const allowed = ["jpg", "jpeg", "png", "webp", "gif", "heic", "heif"];
          const ext = allowed.includes(rawExt) ? rawExt : "jpg";
          const path = `${stamp}-${i}-${crypto.randomUUID()}.${ext}`;
          const { error: upErr } = await supabase.storage
            .from("quote-photos")
            .upload(path, file, { contentType: file.type, upsert: false });
          if (upErr) throw upErr;
          photoPaths.push(path);
        }

        const { error } = await supabase.from("quote_requests").insert({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          space_type: parsed.data.space_type || null,
          wall_size: parsed.data.wall_size || null,
          message: parsed.data.message,
          photo_urls: photoPaths,
        });
        if (error) throw error;
      }


      toast.success(
        t({
          en: "Thanks — we'll be in touch within 1–2 business days.",
          fr: "Merci — nous vous répondrons sous 1 à 2 jours ouvrables.",
          zh: "感谢您的提交，我们将在 1-2 个工作日内与您联系。",
          es: "Gracias — nos pondremos en contacto en 1 a 2 días hábiles.",
          pa: "ਧੰਨਵਾਦ — ਅਸੀਂ 1-2 ਕਾਰੋਬਾਰੀ ਦਿਨਾਂ ਵਿੱਚ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
          ar: "شكرًا — سنتواصل معك خلال 1 إلى 2 يوم عمل.",
          hi: "धन्यवाद — हम 1-2 कार्यदिवसों में संपर्क करेंगे।",
        })
      );
      form.reset();
      setPhotos([]);
    } catch (err) {
      console.error(err);
      toast.error(
        t({
          en: "Something went wrong. Please try again or email us directly.",
          fr: "Une erreur s'est produite. Veuillez réessayer ou nous envoyer un e-mail directement.",
          zh: "出现了一些问题，请重试或直接给我们发送电子邮件。",
          es: "Algo salió mal. Inténtelo de nuevo o envíenos un correo directamente.",
          pa: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ਸਾਨੂੰ ਸਿੱਧਾ ਈਮੇਲ ਕਰੋ।",
          ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة عبر البريد الإلكتروني.",
          hi: "कुछ गलत हो गया। कृपया पुनः प्रयास करें या हमें सीधे ईमेल करें।",
        })
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-md border border-sage/40 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/50 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Name*", fr: "Nom*", zh: "姓名*", es: "Nombre*", pa: "ਨਾਮ*", ar: "الاسم*", hi: "नाम*" })}
          </label>
          <input
            name="name"
            required
            maxLength={100}
            className={inputCls}
            placeholder={t({ en: "Jane Doe", fr: "Jane Doe", zh: "张三", es: "Jane Doe", pa: "ਜੇਨ ਡੋ", ar: "جين دو", hi: "जेन डो" })}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Email*", fr: "E-mail*", zh: "电子邮箱*", es: "Correo electrónico*", pa: "ਈਮੇਲ*", ar: "البريد الإلكتروني*", hi: "ईमेल*" })}
          </label>
          <input name="email" type="email" required maxLength={255} className={inputCls} placeholder="jane@example.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Phone", fr: "Téléphone", zh: "电话", es: "Teléfono", pa: "ਫ਼ੋਨ", ar: "الهاتف", hi: "फ़ोन" })}
          </label>
          <input name="phone" type="tel" maxLength={30} className={inputCls} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Space Type", fr: "Type d'espace", zh: "空间类型", es: "Tipo de espacio", pa: "ਸਪੇਸ ਦੀ ਕਿਸਮ", ar: "نوع المساحة", hi: "स्थान का प्रकार" })}
          </label>
          <select name="space_type" className={inputCls} defaultValue="">
            <option value="">{t({ en: "Select…", fr: "Sélectionner…", zh: "请选择…", es: "Seleccionar…", pa: "ਚੁਣੋ…", ar: "اختر…", hi: "चुनें…" })}</option>
            <option value="residential">{t({ en: "Residential", fr: "Résidentiel", zh: "住宅", es: "Residencial", pa: "ਰਿਹਾਇਸ਼ੀ", ar: "سكني", hi: "आवासीय" })}</option>
            <option value="commercial">{t({ en: "Commercial / Office", fr: "Commercial / Bureau", zh: "商业 / 办公", es: "Comercial / Oficina", pa: "ਵਪਾਰਕ / ਦਫ਼ਤਰ", ar: "تجاري / مكتب", hi: "वाणिज्यिक / कार्यालय" })}</option>
            <option value="hospitality">{t({ en: "Hospitality / Retail", fr: "Hôtellerie / Commerce de détail", zh: "酒店 / 零售", es: "Hostelería / Comercio minorista", pa: "ਹਾਸਪੀਟੈਲਿਟੀ / ਰਿਟੇਲ", ar: "الضيافة / التجزئة", hi: "आतिथ्य / खुदरा" })}</option>
            <option value="other">{t({ en: "Other", fr: "Autre", zh: "其他", es: "Otro", pa: "ਹੋਰ", ar: "آخر", hi: "अन्य" })}</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          {t({ en: "Wall Size / Dimensions", fr: "Taille / Dimensions du mur", zh: "墙面尺寸", es: "Tamaño / Dimensiones de la pared", pa: "ਦੀਵਾਰ ਦਾ ਆਕਾਰ / ਮਾਪ", ar: "حجم / أبعاد الجدار", hi: "दीवार का आकार / माप" })}
        </label>
        <input
          name="wall_size"
          maxLength={100}
          className={inputCls}
          placeholder={t({
            en: "e.g. 8 ft wide × 6 ft tall, or 'not sure yet'",
            fr: "p. ex. 8 pi de large × 6 pi de haut, ou « pas encore sûr »",
            zh: "例如：宽 8 英尺 × 高 6 英尺，或“尚不确定”",
            es: "p. ej. 8 pies de ancho × 6 pies de alto, o 'aún no estoy seguro'",
            pa: "ਜਿਵੇਂ ਕਿ 8 ਫੁੱਟ ਚੌੜਾ × 6 ਫੁੱਟ ਉੱਚਾ, ਜਾਂ 'ਅਜੇ ਪੱਕਾ ਨਹੀਂ'",
            ar: "مثال: 8 أقدام عرضًا × 6 أقدام ارتفاعًا، أو 'غير متأكد بعد'",
            hi: "जैसे 8 फ़ीट चौड़ा × 6 फ़ीट ऊँचा, या 'अभी निश्चित नहीं'",
          })}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          {t({ en: "Tell us about your project*", fr: "Parlez-nous de votre projet*", zh: "请介绍您的项目*", es: "Cuéntenos sobre su proyecto*", pa: "ਸਾਨੂੰ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਬਾਰੇ ਦੱਸੋ*", ar: "أخبرنا عن مشروعك*", hi: "हमें अपने प्रोजेक्ट के बारे में बताएं*" })}
        </label>
        <textarea
          name="message"
          required
          maxLength={2000}
          rows={5}
          className={inputCls}
          placeholder={t({
            en: "Tell us about your space, style preferences, lighting, and any inspiration you have in mind.",
            fr: "Parlez-nous de votre espace, de vos préférences de style, de l'éclairage et de toute inspiration que vous avez en tête.",
            zh: "请告诉我们您的空间情况、风格偏好、采光条件以及任何灵感想法。",
            es: "Cuéntenos sobre su espacio, preferencias de estilo, iluminación y cualquier inspiración que tenga en mente.",
            pa: "ਸਾਨੂੰ ਆਪਣੀ ਸਪੇਸ, ਸਟਾਈਲ ਪਸੰਦਾਂ, ਰੋਸ਼ਨੀ, ਅਤੇ ਕਿਸੇ ਵੀ ਪ੍ਰੇਰਣਾ ਬਾਰੇ ਦੱਸੋ ਜੋ ਤੁਹਾਡੇ ਮਨ ਵਿੱਚ ਹੈ।",
            ar: "أخبرنا عن مساحتك وتفضيلات النمط والإضاءة وأي إلهام تفكر فيه.",
            hi: "हमें अपने स्थान, शैली की पसंद, प्रकाश व्यवस्था, और किसी भी प्रेरणा के बारे में बताएं जो आपके मन में है।",
          })}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          {t({
            en: `Photos of your space (up to ${MAX_PHOTOS})`,
            fr: `Photos de votre espace (jusqu'à ${MAX_PHOTOS})`,
            zh: `您空间的照片（最多 ${MAX_PHOTOS} 张）`,
            es: `Fotos de su espacio (hasta ${MAX_PHOTOS})`,
            pa: `ਤੁਹਾਡੀ ਸਪੇਸ ਦੀਆਂ ਫੋਟੋਆਂ (${MAX_PHOTOS} ਤੱਕ)`,
            ar: `صور مساحتك (حتى ${MAX_PHOTOS})`,
            hi: `आपके स्थान की तस्वीरें (${MAX_PHOTOS} तक)`,
          })}
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handlePhotoChange}
          disabled={photos.length >= MAX_PHOTOS}
          className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
        />
        {photos.length > 0 && (
          <ul className="mt-3 space-y-2">
            {photos.map((f, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-md border border-sage/40 bg-white px-3 py-2 text-sm text-charcoal"
              >
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="ml-3 text-xs font-semibold uppercase tracking-wider text-forest hover:underline"
                >
                  {t({ en: "Remove", fr: "Retirer", zh: "删除", es: "Eliminar", pa: "ਹਟਾਓ", ar: "إزالة", hi: "हटाएं" })}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting
          ? t({ en: "Sending…", fr: "Envoi en cours…", zh: "正在发送…", es: "Enviando…", pa: "ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ…", ar: "جارٍ الإرسال…", hi: "भेजा जा रहा है…" })
          : t({ en: "Request a Quote", fr: "Demander un devis", zh: "获取报价", es: "Solicitar un presupuesto", pa: "ਕੋਟ ਲਈ ਬੇਨਤੀ ਕਰੋ", ar: "اطلب عرض سعر", hi: "कोटेशन का अनुरोध करें" })}
      </button>
    </form>
  );
}

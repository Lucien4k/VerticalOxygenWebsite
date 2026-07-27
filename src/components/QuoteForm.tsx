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
      const messages: Record<string, { en: string; fr: string; zh: string }> = {
        "Name is required": { en: "Name is required", fr: "Le nom est requis", zh: "请填写姓名" },
        "Enter a valid email": { en: "Enter a valid email", fr: "Veuillez entrer un e-mail valide", zh: "请输入有效的电子邮箱" },
        "Tell us a bit about your project": {
          en: "Tell us a bit about your project",
          fr: "Parlez-nous un peu de votre projet",
          zh: "请简单介绍一下您的项目",
        },
      };
      const fallback = t({ en: "Please check the form", fr: "Veuillez vérifier le formulaire", zh: "请检查表单内容" });
      toast.error(issue && messages[issue] ? t(messages[issue]) : fallback);
      return;
    }

    setSubmitting(true);
    try {
      const photoPaths: string[] = [];
      const stamp = Date.now();
      for (let i = 0; i < photos.length; i++) {
        const file = photos[i];
        const ext = file.name.split(".").pop() ?? "jpg";
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

      toast.success(
        t({
          en: "Thanks — we'll be in touch within 1–2 business days.",
          fr: "Merci — nous vous répondrons sous 1 à 2 jours ouvrables.",
          zh: "感谢您的提交，我们将在 1-2 个工作日内与您联系。",
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
            {t({ en: "Name*", fr: "Nom*", zh: "姓名*" })}
          </label>
          <input
            name="name"
            required
            maxLength={100}
            className={inputCls}
            placeholder={t({ en: "Jane Doe", fr: "Jane Doe", zh: "张三" })}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Email*", fr: "E-mail*", zh: "电子邮箱*" })}
          </label>
          <input name="email" type="email" required maxLength={255} className={inputCls} placeholder="jane@example.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Phone", fr: "Téléphone", zh: "电话" })}
          </label>
          <input name="phone" type="tel" maxLength={30} className={inputCls} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            {t({ en: "Space Type", fr: "Type d'espace", zh: "空间类型" })}
          </label>
          <select name="space_type" className={inputCls} defaultValue="">
            <option value="">{t({ en: "Select…", fr: "Sélectionner…", zh: "请选择…" })}</option>
            <option value="residential">{t({ en: "Residential", fr: "Résidentiel", zh: "住宅" })}</option>
            <option value="commercial">{t({ en: "Commercial / Office", fr: "Commercial / Bureau", zh: "商业 / 办公" })}</option>
            <option value="hospitality">{t({ en: "Hospitality / Retail", fr: "Hôtellerie / Commerce de détail", zh: "酒店 / 零售" })}</option>
            <option value="other">{t({ en: "Other", fr: "Autre", zh: "其他" })}</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          {t({ en: "Wall Size / Dimensions", fr: "Taille / Dimensions du mur", zh: "墙面尺寸" })}
        </label>
        <input
          name="wall_size"
          maxLength={100}
          className={inputCls}
          placeholder={t({
            en: "e.g. 8 ft wide × 6 ft tall, or 'not sure yet'",
            fr: "p. ex. 8 pi de large × 6 pi de haut, ou « pas encore sûr »",
            zh: "例如：宽 8 英尺 × 高 6 英尺，或“尚不确定”",
          })}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          {t({ en: "Tell us about your project*", fr: "Parlez-nous de votre projet*", zh: "请介绍您的项目*" })}
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
          })}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          {t({
            en: `Photos of your space (up to ${MAX_PHOTOS})`,
            fr: `Photos de votre espace (jusqu'à ${MAX_PHOTOS})`,
            zh: `您空间的照片（最多 ${MAX_PHOTOS} 张）`,
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
                  {t({ en: "Remove", fr: "Retirer", zh: "删除" })}
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
          ? t({ en: "Sending…", fr: "Envoi en cours…", zh: "正在发送…" })
          : t({ en: "Request a Quote", fr: "Demander un devis", zh: "获取报价" })}
      </button>
    </form>
  );
}

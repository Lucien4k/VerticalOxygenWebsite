import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
  const [submitting, setSubmitting] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const valid = files.filter((f) => {
      if (!f.type.startsWith("image/")) {
        toast.error(`${f.name} is not an image`);
        return false;
      }
      if (f.size > MAX_PHOTO_MB * 1024 * 1024) {
        toast.error(`${f.name} is over ${MAX_PHOTO_MB}MB`);
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
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
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

      toast.success("Thanks — we'll be in touch within 1–2 business days.");
      form.reset();
      setPhotos([]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or email us directly.");
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
            Name*
          </label>
          <input name="name" required maxLength={100} className={inputCls} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            Email*
          </label>
          <input name="email" type="email" required maxLength={255} className={inputCls} placeholder="jane@example.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            Phone
          </label>
          <input name="phone" type="tel" maxLength={30} className={inputCls} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
            Space Type
          </label>
          <select name="space_type" className={inputCls} defaultValue="">
            <option value="">Select…</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial / Office</option>
            <option value="hospitality">Hospitality / Retail</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          Wall Size / Dimensions
        </label>
        <input
          name="wall_size"
          maxLength={100}
          className={inputCls}
          placeholder="e.g. 8 ft wide × 6 ft tall, or 'not sure yet'"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          Tell us about your project*
        </label>
        <textarea
          name="message"
          required
          maxLength={2000}
          rows={5}
          className={inputCls}
          placeholder="Tell us about your space, style preferences, lighting, and any inspiration you have in mind."
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground">
          Photos of your space (up to {MAX_PHOTOS})
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
                className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="ml-3 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                >
                  Remove
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
        {submitting ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
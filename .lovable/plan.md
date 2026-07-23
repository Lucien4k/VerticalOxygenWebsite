Update the quote section so it no longer reads as pink/warm. Switch the background to a light sage wash, keep the form card light and readable, and ensure all text and inputs maintain contrast.

### What will change

1. **New colour token in `src/styles.css`**
   - Add `--sage-wash: oklch(0.94 0.02 125)` mapped to `--color-sage-wash` so it is available as `bg-sage-wash` / `text-sage-wash`.

2. **Quote section background (`src/routes/index.tsx`)**
   - Change the outer `#quote` section from `bg-cream` to `bg-sage-wash`.
   - Keep the section text as `text-charcoal` for readability.

3. **Form card background**
   - Change the form card from `bg-card` (warm pinkish tone) to `bg-white` with a very subtle sage border (`border-sage/30`).
   - Keep the existing rounded-2xl padding and shadow.

4. **Form inputs (`src/components/QuoteForm.tsx`)**
   - Ensure input/select backgrounds are `bg-white` and borders use `border-sage/40` so they sit cleanly on the sage page.
   - Keep placeholder text muted charcoal.

5. **Submit button**
   - No change — it already uses the forest-deep primary colour, which works on sage.

### Result
The quote page will feel calm, botanical, and premium rather than warm/pink. The form will remain easy to read with white fields floating on the soft sage background.
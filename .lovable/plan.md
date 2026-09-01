# Plan

## Goal
Make the navigation top bar stay visible while scrolling the home page, and replace the "Engineered in layers" section copy with a custom, on-site design message.

## 1. Sticky top bar
- The header markup has been moved out of the fixed hero `<section>` so it sits as a sibling of the page content.
- Verify it remains visible over all sections (including the scroll-driven hero) and does not block clicks on overlays like the systems lightbox.
- Adjust z-index / pointer-events if the fixed header intercepts lightbox interactions.

## 2. "Engineered in layers" copy update
- New headline: **"Custom-built on site"**
- New body: **"Every living wall is designed, planted, and assembled for your space — not pulled from a warehouse shelf. Our team builds each installation on location so it fits the architecture, light, and intent of the room."**
- Update the same block in all supported languages (en, fr, zh, es, pa, ar, hi) using the existing `useT` / `Tr` pattern in `src/routes/index.tsx`.

## 3. Verification
- Run `bunx tsc --noEmit`.
- Capture a Playwright screenshot scrolled partway down the home page to confirm the top bar is visible and the new copy is readable.

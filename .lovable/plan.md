## Goal
Make the overlay text on the first hero ("Living works of art") and the second hero ("Panels that come together as one.") clearly readable over the busy frame-sequence backgrounds.

## Changes

1. **First hero (`src/routes/index.tsx`, lines ~102–255)**
   - Strengthen the existing full-section gradient scrim: change `from-charcoal/60 via-charcoal/35 to-charcoal/70` to a darker, left-biased gradient (`from-charcoal/85 via-charcoal/55 to-charcoal/30`) so text side is darkest without hiding the animation.
   - Add a soft radial vignette behind the text block only (a second absolutely-positioned div sized to the text column, `bg-[radial-gradient(ellipse_at_left,_theme(...)/70,_transparent_70%)]`), keeping the right side of the frame visible.
   - Add `drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]` to the `h1`, eyebrow, and body copy classes for extra separation.
   - Bump body copy from `text-cream/90` to `text-cream` and eyebrow from `text-terra-light` to `text-terra-light drop-shadow`.

2. **Second hero overlay (`ScrollFramesSection` call, lines ~261–280)**
   - Wrap the overlay content in a translucent charcoal card: `rounded-2xl bg-charcoal/55 backdrop-blur-sm px-8 py-10 ring-1 ring-cream/10`, so the WordsReveal heading and paragraph sit on a consistent dark plate regardless of which frame is showing.
   - Add matching `drop-shadow` to the eyebrow and heading.
   - Optionally add a bottom-to-top gradient inside `ScrollFramesSection`'s sticky container via the overlay wrapper (`bg-gradient-to-t from-charcoal/70 to-transparent`) so the text base stays dark.

3. **No other sections change.** Frame sequences, animation timing, section heights, and copy stay identical.

## Technical notes
- All edits are in `src/routes/index.tsx`; no new components or assets.
- Uses existing design tokens (`charcoal`, `cream`, `terra-light`) — no new colors.
- `drop-shadow-*` is a stock Tailwind utility; no CSS additions needed.

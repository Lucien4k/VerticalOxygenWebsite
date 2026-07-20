# Progress bar — even checkpoint spacing

Right now checkpoints (Start, Work, Locations, In Motion, About, Systems, Quote) are placed on the stem proportional to each section's real scroll position, so long sections push their dots far apart and short sections crowd them together.

## Change

In `src/components/ScrollProgress.tsx`:

- Remove the `marks` state and the measurement effect that computes each section's fractional scroll offset.
- Space the 7 checkpoints evenly along the stem: dot `i` sits at `i / (CHECKPOINTS.length - 1) * 100%` — same visual rhythm no matter how tall each section is.
- Track the active checkpoint by watching which section is currently in view (find the checkpoint whose element's top has most recently passed the top of the viewport). Store `activeIndex`.
- Drive the terracotta growth fill from `activeIndex` interpolated toward the next checkpoint, so the fill moves smoothly between evenly-spaced dots and lands exactly on a dot when its section is at the top. Keep the existing 260ms cubic-bezier transition.
- "Reached" state for each dot is now `i <= activeIndex` (plus the interpolated fraction for the current segment), not `p >= mark`.
- Click-to-jump behavior stays the same.

## Technical notes

- Use one scroll listener with `requestAnimationFrame`, same pattern as today.
- For active detection: for each checkpoint id, `getBoundingClientRect().top`; the active one is the last checkpoint whose top is `<= 1px` (i.e. at or above the viewport top). Fall back to index 0 when nothing has passed yet.
- Fill height = `((activeIndex + segmentFraction) / (CHECKPOINTS.length - 1)) * 100%`, where `segmentFraction` is how far scroll has progressed from the active section's top toward the next section's top (clamped 0–1).
- Keep the mix-blend hairline track, terracotta glow, and ring-4 charcoal ring on dots — visual style unchanged.

No other files touched.
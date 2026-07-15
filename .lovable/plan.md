## Simplify the hydroponic diagram

The current hydroponic wall diagram (`hydroponic-wall-diagram-v3.jpg`) has too much mechanical detail. We'll regenerate it as a more editorial, minimal illustration that still shows the spout/irrigation loop.

### What to change
- Keep the core concept: water reservoir → pump → vertical spout/manifold → plant roots → return drain.
- Remove fine-grained detail like individual screws, complex pipe joints, measurement labels, or overly technical cross-sections.
- Simplify to 4–5 bold visual elements: a clean reservoir, a single pump icon, a vertical distribution channel/spout, stylized plant rows, and a return line.
- Match the existing aquaponic v3 style: flat vector look, terracotta/sage/cream palette, generous whitespace, modern magazine aesthetic.
- Increase readability at the current card size.

### Implementation steps
1. Generate a new `hydroponic-wall-diagram-v4.jpg` with a premium, simplified editorial style.
2. Upload it as a Lovable asset and replace the import/URL in `src/routes/index.tsx`.
3. Keep the 2-column Aquaponic + Hydroponic layout and the larger card sizing already in place.
4. Optionally bump the image height or card padding so the simpler illustration has room to breathe.

### Acceptance
- The hydroponic card no longer looks busy or overly technical.
- The spout/irrigation system is still clearly visible.
- Style matches the rest of the page.
# Specifications page cleanup

Trim the Specifications page down to the two systems you actually sell and remove the US-centric / unclear technical items.

## Systems

- Keep only two entries: the Aquaponic wall and the Hydroponic wall (the existing "Modular Hydroponic Panel" row becomes the Hydroponic system; a matching Aquaponic row replaces the others).
- Remove Preserved Moss Wall, Freestanding Divider and Vertical Tower everywhere they appear (table, mobile cards, category filter chips).
- Category filter reduces to All / Aquaponic / Hydroponic.
- Load stays at 18.4 psf (saturated) for hydroponic; the aquaponic row gets its own comparable saturated load figure.
- Water use changes from gallons to litres: 0.35 L/day per sq ft.

## Removals

- NRC column, NRC values, the ASTM C423 sound-absorption standard row, and the NRC mention in the table footnote.
- CSI column, CSI values, the "CSI 3-Part" summary line, the whole CSI MasterFormat block, and CSI wording in the page meta description and search placeholder.
- Downloads column plus the CAD.dwg / BIM.rvt buttons on both desktop and mobile.
- The "Reporting" row in the maintenance table.
- The sentence saying the plant guarantee "lapses if service is discontinued" — the section still states the 100% guarantee only applies with an active maintenance agreement.

## IPM detail

Expand the pest-management row into a fuller description: scheduled inspection of foliage and root zone, early identification of common pests (spider mite, aphid, mealybug, fungus gnat), preference for biological and low-toxicity controls such as beneficial insects and insecticidal soap, targeted spot treatment rather than blanket spraying, and follow-up checks on the next visit until the issue clears.

## Spec email

Yes — specs@verticaloxygen.com can forward to your Gmail, but that forward is created where your domain's email is hosted (your registrar or mail provider), not in the website code. Until it's live, the page will show verticaloxygen@gmail.com so nothing bounces; once you confirm the forward works, it switches back to specs@verticaloxygen.com in one edit.

## Technical notes

All changes are in `src/routes/specifications.tsx`: the `SYSTEMS` array, `CATEGORIES`, table/card markup, standards list, and maintenance section. All new and edited copy gets the full seven-language translations already used on the page.

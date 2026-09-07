# Mohaned Bouzaidi — MB mark

An original interlocking MB monogram for the game and software portfolio. The white M and lavender B use the portfolio's existing palette. The dark backing is intentional; this version is not transparent.

Created with the built-in image generator on September 5, 2026. The generated master is `mb-logo-master.png` in this directory. Runtime exports are size reductions of that image, without redrawing the mark.

| Use | File | Dimensions |
| --- | --- | --- |
| Header | `responsiveportfolio/src/Image/brand/mb-logo.png` | 128×128, displayed at 40×40 |
| Browser icon | `responsiveportfolio/public/favicon-32.png` | 32×32 |
| Legacy browser icon | `responsiveportfolio/public/favicon.ico` | 32×32 PNG in ICO container |
| Apple icon | `responsiveportfolio/public/apple-touch-icon.png` | 180×180 |
| App icons | `responsiveportfolio/public/logo192.png`, `logo512.png` | 192×192 / 512×512 |

The header image has an empty alt attribute because the adjacent “Mohaned.” text names the home link. Explicit dimensions prevent layout shifts. Existing briefcase imagery is no longer referenced by the page or app manifest.

## Generation prompts

Initial exploration:

> Use case: logo-brand. Asset type: production portfolio logo symbol for Mohaned Bouzaidi, a game developer and software engineer. Create ONE original custom MB monogram, no wordmark or other text. Flat vector-style geometric mark: a clearly readable white M interlocks beside a vivid lavender-purple B, shared angular construction with clean negative space and thick sturdy strokes. Subtle forward motion from diagonal cuts, refined and friendly, professional independent creative developer identity, not an esports team. Simple silhouette, optically balanced square composition, clear at 24px. Exactly two solid flat colors: off-white #F2F3F4 and lavender #B69AF6. Genuinely transparent background with alpha; center the mark tightly with approximately 8% empty margin around it. No gradients, no glow, no shadows, no texture, no outlines, no bevel, no 3D, no mockup, no device, no extra symbols, no controller, no generic brackets, no resemblance to the BlackBerry logo. Output one clean standalone mark, ideally square at 1024px.

Final refinement, using the first output as the edit reference:

> Edit the supplied original MB monogram into the final dark-theme portfolio asset. Preserve its exact letter geometry and balanced arrangement: interlocking angular M and rounded B, M on left, B on right. Replace the entire checkerboard background and ALL empty spaces/counters with ONE perfectly flat solid dark background #191924 (RGB 25,25,36), edge to edge. Make the M a perfectly solid flat off-white #F2F3F4 and B a perfectly solid flat lavender #B69AF6. Eliminate all gradients, mottling, shadows, haze or texture from both letters and background. Clean antialiased vector-like edges. Center the symbol in a square, enlarge to fill approximately 85 percent of canvas width, leaving equal optical padding. Just the symbol: no wordmark, no captions, no extra elements, no light background, no checkerboard, no mockup.

The generated bitmap approximates the requested colors; the prompt is a design brief, not a claim of exact pixel values. The source image is retained at its original resolution, and small exports keep the website from loading the large master for navigation.

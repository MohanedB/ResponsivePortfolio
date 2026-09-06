# Portfolio review

Reviewed September 5, 2026.

## Structure and usability

Keep one portfolio with **All projects**, **Games**, and **Software** filters. Visitors can understand Mohaned's work immediately and then narrow it to their interests. University, CEGEP, and independent work are useful context filters, rather than separate entrances to the site. This preserves the distinction between disciplines without hiding relevant projects behind a mandatory choice.

The updated page opens directly on the introduction, puts projects immediately after it, and adds a prominent project link beside the résumé. All projects are visible initially.

## Findings addressed

- Project discovery required category choices before showing work. The unified grid now shows the work immediately, with combinable discipline/context filters, a result count, and a clear reset action.
- Search matched internal translation keys instead of displayed project names. It now searches translated titles, descriptions, technologies, and aliases, including accent-insensitive matching for Grouillère.
- Project cards were mouse-oriented clickable containers with hover-only hints. They are now keyboard-operable buttons with persistent detail prompts. Project details use a labeled modal with focus management and Escape dismissal.
- The contact form used a restrictive email expression and lacked associated labels/error descriptions. It now uses browser email validity, accessible field feedback, focus on the first invalid field, and protection against duplicate submissions. Existing delivery configuration remains in place; a successful test of the UI does not establish live email delivery.
- Navigation, icon links, document language, focus indicators, and the main content landmark needed accessibility improvements. The changes add descriptive labels, a skip link, French/English document language updates, and reduced-motion behavior.
- Missing images had no fallback. Project media now falls back to a title cover, and nonessential skill icons can fail without hiding their labels.
- Some project destinations were mislabeled as GitHub links, and Calculator was categorized as a game. Website/file destinations now have appropriate labels, and Calculator appears under software.
- The document and manifest retained generic application metadata. They now identify Mohaned and the portfolio's purpose.

## New project content and provenance

All four additions have English and French copy. Unknown dates and academic year numbers have been omitted.

| Project | Evidence and presentation |
| --- | --- |
| **LetumLoop — TPS Prototype** | Mohaned supplied the university pitch context and first-round selection outcome, and confirmed that he built the entire prototype. The local project descriptor and C++ source establish Unreal Engine 5.7 and third-person movement, camera, and rifle-combat work. GitHub metadata confirms that the source repository is private, so the portfolio includes no source-code link. It is presented as an archived prototype, without claiming a finished deckbuilding system. |
| **Straw and Feathers** | Mohaned supplied the title, university context, completed first prototype, and ongoing development. He confirmed responsibility for all code in the current prototype, including the straw and crow controllers and switching between them. No matching public repository or game page was verified. The copy therefore does not invent an engine, additional gameplay features, release date, year of study, or playable link. |
| **Grouillère** | Mohaned identified it as a completed university game and confirmed that he built the complete character controller and all player systems, including cheese and poison mechanics. Teammates handled enemies, the ending cinematic, points, and the timer. The [team member's project write-up](https://www.therookies.co/projects/104357) confirms the accented title, third-person arcade-adventure premise, Unreal Engine 5/C++/Blueprints, and Mohaned Bouzaidi's programmer credit. The link is labeled as a team write-up, not a playable build. The author's individual level-design and technical-design contributions are not attributed to Mohaned. Its August 27, 2026 publication date is not treated as the game's release date. |
| **ARCHIVERIF** | Mohaned confirmed that he built the entire project. The [public product website](https://archiverif.ca/en) establishes bilingual compliance-document collection, expiry tracking, alerts, and nightly RBQ/RENA/REA/OQLF monitoring. Local manifests and documentation establish Next.js, TypeScript, FastAPI, and PostgreSQL. Source repositories are private; only the public product is linked. The cover uses the existing [published brand graphic](https://archiverif.ca/brand/og-image.svg), verified publicly accessible. Monitoring is described as nightly, not real-time. |

The three games currently use title-only covers until authentic screenshots are supplied. These are typographic placeholders, not fabricated gameplay images. No private source URLs, private screenshots, or invented gameplay footage have been added.

## Highest-value next improvements

1. Add a short gameplay clip and two or three real screenshots for each game. Put the core interaction first, with optional playback and captions or concise text explaining what the viewer is seeing.
2. Give each featured project a compact case study: team size, Mohaned's precise role, one technical challenge, the implemented solution, and a concrete outcome. Use measured results when available rather than invented metrics.
3. Add verified playable builds, release pages, or public source links where sharing is appropriate. A clearly labeled download should state its platform; unavailable builds should not appear as working buttons.
4. Keep the most representative recent projects first. Let the existing project filters serve different visitors before considering separate landing pages for individual job applications.

## Owner clarification needed

The AppDeMo project lists **March 4–May 10, 2024**, while the Montréal internship experience lists **March 4–May 10, 2025** in both languages (`education26` versus `exper3` in `I18n.js`). Confirm the correct year before changing either record.

Straw and Feathers still needs its engine and any shareable build or media. Mohaned has confirmed his responsibilities for all four additions; the next content pass can expand those contributions into specific technical challenges and outcomes, with team sizes and authentic screenshots where available.

## Verification

- `npm test -- --watchAll=false --runInBand`: 9 tests passed across project discovery/filtering/modal behavior and contact validation/sending states. Email transport was mocked; no email was sent.
- `CI=true npm run build`: production build passed with no ESLint warnings. The existing Create React App dependencies still emit Node deprecation and stale Browserslist-data notices; updating the build toolchain is separate follow-up work.
- Chromium browser review at 320, 390, 1024 and 1440 CSS pixels: no horizontal page overflow observed. The 320-pixel project modal also had no internal horizontal overflow.
- Verified initial project visibility, Games + University filtering, French accent-insensitive search, no-result reset, mobile menu Escape/focus return, modal Tab containment/Escape/focus restoration, and body-scroll restoration.
- Verified reduced-motion preference disables the animated role text and hero SVG animation, document language updates to French, and missing images do not leave visible broken-image icons.
- No uncaught browser errors were reported during these flows. Live EmailJS delivery and a hosted deployment were not tested.
- `git diff --check`: passed.

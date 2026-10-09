# Portfolio review

Initially reviewed September 5, 2026; content and provenance updated October 8, 2026. Earlier verification results remain labeled as historical.

## Structure and usability

Keep one portfolio with **All projects**, **Games**, and **Software** filters. Visitors can understand Mohaned's work immediately and then narrow it to their interests. University, CEGEP, and independent work are useful context filters, rather than separate entrances to the site. This preserves the distinction between disciplines without hiding relevant projects behind a mandatory choice.

The page opens on an introduction that names Unreal Engine/C++, character controllers, cameras and player interactions alongside full-stack web development. Mohaned confirmed that he is open to opportunities in games, software and IT; the English/French introduction says so without inventing a start date or employment type. The project link and résumé remain prominent.

Projects follow the introduction. A **Selected work / Projets à la une** section features Straw and Feathers, Grouillère and ARCHIVERIF in that order, with complete contribution summaries and a stronger card border. The separate **All projects** collection below still contains all 15 projects, including the featured three. Its existing filters and result count apply only to that collection; the selected section remains stable while filtering.

## Findings addressed

- Project discovery required category choices before showing work. The unified grid now shows the work immediately, with combinable discipline, context, game-engine, calendar-year and programming-language filters, a result count, and a clear reset action. See [Project discovery filters](project-filters.md) for metadata and URL behavior.
- Search matched internal translation keys instead of displayed project names. It now searches translated titles, descriptions, technologies, and aliases, including accent-insensitive matching for Grouillère.
- Project cards were mouse-oriented clickable containers with hover-only hints. Each compact card is now a single navigation link with a persistent **More information / En savoir plus** text label. The whole card opens its shareable `/projects/:slug` page, with subtle hover and keyboard-focus feedback that respects reduced-motion preferences. Five recent projects have expanded case studies. The earlier summary modal has been replaced by these pages. A modal is used only to enlarge gallery images.
- Case-study navigation preserves the home page’s search, discipline and context filters in the URL. Pages provide contribution sections, section links, explained code excerpts, a return link, translated titles and descriptions, and a useful not-found state. Galleries include captions, optional credits and image enlargement; code excerpts expand on demand.
- The contact form used a restrictive email expression and lacked associated labels/error descriptions. It now uses browser email validity, accessible field feedback, focus on the first invalid field, and protection against duplicate submissions. Existing delivery configuration remains in place; a successful test of the UI does not establish live email delivery.
- Navigation, icon links, document language, focus indicators, and the main content landmark needed accessibility improvements. The changes add descriptive labels, a skip link, French/English document language updates, and reduced-motion behavior.
- Missing images had no fallback. Project media now falls back to a title cover. Skill badges use bundled SVG icons with colors visible on the dark background; EJS uses a local template-delimiter mark. This replaces external logo requests entirely and correctly distinguishes Visual Studio from VS Code.
- Some project destinations were mislabeled as GitHub links, and Calculator was categorized as a game. Website/file destinations now have appropriate labels, and Calculator appears under software.
- The document and manifest retained generic application metadata. They now identify Mohaned and the portfolio's purpose.

## New project content and provenance

The portfolio now has 15 projects, including five 2026 entries with expanded English/French case studies: Straw and Feathers V05, ARCHIVERIF, Grouillère, LetumLoop — TPS Prototype and BouStreaming. Their filter metadata, cards and detail-page facts show that calendar year. Exact months, days, release dates and academic year numbers are not inferred. All current projects have a documented year, so the conditional **Not specified** year option is absent.

| Project | Evidence and presentation |
| --- | --- |
| **LetumLoop — TPS Prototype** | Mohaned supplied the university pitch context and first-round selection outcome, and confirmed that he built the entire prototype. The local project descriptor and C++ source establish Unreal Engine 5.7 and third-person movement, camera and rifle-combat work. The dedicated page describes jump buffering/coyote time, camera recovery, muzzle obstruction, rifle states and damage feedback. Its source snapshot includes technical work after the original pitch; the page distinguishes those stages. Two exact, owner-authorized code excerpts have plain file/revision attribution because the source repository is private. No finished deckbuilding system is claimed. |
| **Straw and Feathers V05** | The existing page now presents an advanced Unreal Engine 5.7/C++/Blueprints prototype that the school did not select. Its local V05 source and private Fibery technical-proof reflection establish Mohaned's movement, character/camera switching, carrying/receiver and censer systems, plus animation/gameplay integration and shared technical/QA work. Teammates contributed models, animations, VFX and other gameplay systems; the earlier sole-V1-code statement is not generalized to V05. The team's visuals remain preliminary. The page attributes its controller excerpt to the V05 local snapshot and relative source path; this documentation records the source-file SHA-256 without inventing a Git revision. No public build or gameplay media is supplied. |
| **Grouillère** | Mohaned confirmed the complete character/controller and player systems, including cheese and poison; teammates handled enemies, the ending cinematic, score and timer. Read-only Fibery research in `H26-CJV1410-Taz` now supports a detailed breakdown of walking/tornado movement, speed/terrain tuning, jumping, bounces, camera/input options, cheese, poison pickup and poison-pit recovery. The [public team write-up](https://www.therookies.co/projects/104357) provides project context and credits; its author's level/technical-design work is not attributed to Mohaned. The write-up is not a playable build, and its publication date is not the release date. The 2026 year and supplied mouse illustration are retained. No source code or verified public build is supplied. |
| **ARCHIVERIF** | Mohaned confirmed that he built the entire product. The [public product website](https://archiverif.ca/en) and committed frontend/backend source establish bilingual document collection, expiry reminders, nightly registry monitoring and project organization. Local manifests establish Next.js, TypeScript, FastAPI, PostgreSQL and Redis. Its dedicated page includes two authentic public-page screenshots and an owner-authorized TypeScript expiry helper with exact revision attribution. Source repositories are private; the product is the public destination. Monitoring is described as scheduled/nightly. |
| **BouStreaming** | A working software project with restricted access, backed by private `BouStreaming` source at commit `d1fbf45927d25174cd5b3e7e529ecfaaa087b85c`. Its stack is Next.js, React, TypeScript, Tailwind and Supabase/PostgreSQL. The case study includes a source-attributed deferred-removal excerpt and the project's original Android banner, clearly identified as brand artwork. A legal-content version is planned; no public external URL or released legal-content version is claimed. |

Grouillère uses Mohaned's supplied mouse illustration, while Straw and Feathers uses his replacement 3D character image of a glowing-faced Scarecrow and a Crow on a dark background. Both appear on cards and in galleries as unchanged local copies with English/French alt text and captions. Cards contain the full characters against matching backgrounds. No specific artist attribution is confirmed, and neither image is presented as a gameplay screenshot or runtime verification. LetumLoop TPS retains a title cover. No confirmed gameplay capture or public playable build destination has been supplied for the three games. Their diagrams describe implemented systems or owner-confirmed responsibilities and are not presented as gameplay captures. ARCHIVERIF's screenshots were captured from its public English homepage; its illustrated watchlist is an example from that page, not a private customer dashboard. BouStreaming's banner is original brand artwork, not a product-interface screenshot.

See [Project case-study pages](project-case-studies.md) for durable source paths, full revision IDs, excerpt line ranges, screenshot provenance and content-maintenance instructions.

### Straw V05 task-level coverage follow-up

Mohaned explicitly authorized Fibery links and requested coverage of all his recorded contributions. The read-only review inventoried **59 tasks across two pages**: **33 involve Mohaned**, comprising **18 Done tasks with Responsible, Accountable or Consulted roles** and **15 Informed-only tasks**. The [complete 18-task matrix](project-case-studies.md#complete-responsible--accountable--consulted-task-matrix) preserves the exact titles, roles and contribution boundaries. Informed-only records are not presented as personal implementation work.

The earlier case study underexplained Plant/Unplant switching sequences, player Animation Blueprint states and Anim Notifies, scare movement/switch/retrigger lockouts, animation restoration, `HandleDeath` and deferred respawn, hook/censer door integration, reusable carrying architecture and technical/QA documentation. The expanded content connects these contributions to the [task board](https://cnm-mtl.fibery.io/StrawAndFeather/13080), [Mohaned's reflection](https://cnm-mtl.fibery.io/StrawAndFeather/13753), [technical document](https://cnm-mtl.fibery.io/StrawAndFeather/12568), [QA document](https://cnm-mtl.fibery.io/StrawAndFeather/12535) and individual task records. The source-access note explains that readers may need a Fibery workspace account.

The reflection confirms direct animation/scare/death integration for tasks **57, 45 and 41**, despite their Accountable labels. Tasks **39, 42 and 68** remain oversight/coordination credit; tasks **24, 33, 34 and 48** remain consultation credit. Models, textures, animation assets, VFX and teammates' gameplay systems retain team attribution. Original acceptance checklists are historical project records, not new QA verification. The unassigned **Camera Ceiling Clipping — Fixed** QA entry is not attributed to Mohaned. No Fibery record was modified.

### Grouillère mechanics and contribution evidence

The read-only review inventories **149 tasks (100 + 49)** in `H26-CJV1410-Taz`, with relevant mechanics and agent records. Its [positioning document](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Positionnement/1) uses the earlier title Grouyère; [Maude's character record](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Positionnement/3) and tornado/Taz presentation connect it to Grouillère. The [evidence matrix](project-case-studies.md#grouill%C3%A8re) distinguishes completed task records, documented behavior and the limits of title-only evidence. Task records lack assignee fields, so `Created By` is not treated as implementation credit; Mohaned's explicit account establishes his scope.

The expanded case study distinguishes cheese's speed boost, rat-poison pickup's interaction with the teammate-owned score system, and poison-pit stun/reposition recovery. It explains the camera-relative walking/tornado controller, speed-driven transitions, slope and bounce behavior, jumping/ground contact, camera adjustment and input options without inventing formulas or timing values. Unchecked acceptance items and tasks still awaiting validation remain qualified. No source code is available for an authentic excerpt, and the existing illustration is not presented as a gameplay capture. Fibery was not modified.

## Highest-value next improvements

1. Add a short gameplay clip and two or three real screenshots for each game. Put the core interaction first, with optional playback and captions or concise text explaining what the viewer is seeing.
2. Add authentic gameplay captures to Straw V05 and Grouillère. Grouillère now has detailed Fibery evidence; source files would allow precise algorithm explanations and an authentic code excerpt. BouStreaming would benefit from a walkthrough using shareable content. Add team sizes and measured outcomes only when confirmed.
3. Add verified playable builds, release pages, or public source links where sharing is appropriate. A clearly labeled download should state its platform; unavailable builds should not appear as working buttons.
4. Keep the selected projects current as stronger work becomes available. The existing project filters serve different visitors without requiring separate landing pages for individual job applications.

## Owner clarification needed

The AppDeMo project lists **March 4–May 10, 2024**, while the Montréal internship experience lists **March 4–May 10, 2025** in both languages (`education26` versus `exper3` in `I18n.js`). Confirm the correct year before changing either record.

The three games still need authentic gameplay captures and verified public build destinations. Grouillère's documented mechanics now have Fibery evidence; source files are still needed for exact algorithm explanations or code excerpts. Straw V05's engine, language and implementation evidence are available; team-media credits and actual runtime validation remain important for future captures. BouStreaming's legal-content version is planned, and any future public link must point to a verified available destination.

## Selected work and introduction update — verification

All 27 tests across five suites pass. The CI production build compiles successfully with 214.41 KB gzip main JavaScript. Tests cover the selected order and contribution copy, the complete 15-project collection, unique DOM IDs, English/French filtering and real application navigation/focus without scrolling away from search. Existing project-detail, gallery and contact checks pass. `git diff --check` passes. Code and content were reviewed locally; independent agent review was unavailable due to model capacity. Browser visual inspection remains unavailable after the earlier URL-policy block.

## Historical verification: Grouillère Fibery update

The current update adds eight bilingual Grouillère sections and 21 source links on `codex/grouillere-fibery-details`. All 24 tests across four suites pass; the CI production build compiles successfully with 213.5 KB gzip main JavaScript. The content check verifies 47 localized fields, evidence links and artwork preservation, and independent review found no actionable issues. Fresh browser inspection remains unavailable after the earlier URL-policy block; no game runtime validation is claimed. [PR #5](https://github.com/MohanedB/ResponsivePortfolio/pull/5) has been merged. The new update preserves the artwork, 2026 year and team write-up and adds no code excerpt or playable destination. Fibery remained read-only.

## Historical verification: character image follow-up

The initial image follow-up passed all 24 tests across four suites; those tests were not rerun for the single-image replacement. The replacement Straw 3D image matches its new attachment hash, and the fresh production build passes with 210.38 KB gzip main JavaScript. Its bilingual descriptions and dark card background are updated; Grouillère is unchanged. Browser visual inspection remains unavailable after the earlier URL-policy block. No public playable link is added.

## Historical verification: October 8 Fibery coverage follow-up

The follow-up expanded Straw into 11 bilingual contribution sections with direct task links and a Fibery access note. All 24 tests across four suites passed, and the CI production build passed with 209.54 KB gzip main JavaScript. Inventory comparison confirmed coverage of all 18 Responsible/Accountable/Consulted tasks, bilingual labels and the preserved exact V05 excerpt. A JSX closing-tag error caught during initial validation was fixed before the passing runs. Fresh browser visual inspection remained unavailable after the browser tool's URL-policy block. [PR #5](https://github.com/MohanedB/ResponsivePortfolio/pull/5) was open at that checkpoint and has since been merged. Fibery was read only.

## Historical verification: October 8 V05/BouStreaming content update

Before the Fibery coverage follow-up, the V05/BouStreaming update expanded the dataset to 15 projects, with five entries selected by the 2026 year filter. `npm test -- --watchAll=false --runInBand` passed all 24 tests across four suites. `CI=true npm run build` compiled successfully with 205.01 KB gzip main JavaScript and the existing Node/Browserslist notices. Both new excerpts matched their recorded source, and the copied banner's hash matched the original asset.

The development server compiled on port 3000. Browser inspection was blocked by the browser tool's URL security policy; no visual or interaction verification was claimed for that update. The earlier browser results below remain historical.

## Historical verification: original dedicated pages

- The repository suite has 17 passing tests across four suites covering discovery, translated search, combined filters, shareable project links, direct case-study rendering, return-filter preservation, translated content/product URLs, unknown slugs, gallery behavior and contact states. The four gallery checks are committed in `src/components/Project/ProjectMedia.test.jsx`. Email transport remains mocked.
- All three new source excerpts were compared exactly with their recorded Git revisions, including their original comments. The data file’s syntax and bilingual content structure were checked.
- The CI production build passed, with approximately 197.6 KB gzip JavaScript and the existing toolchain notices.
- Chromium via Edge at 1440, 390 and 320 CSS pixels showed no horizontal page overflow on any of the four new pages. Image enlargement, Escape/focus return, a 288px dialog at the 320px viewport, contained code scrolling with an 8px scrollbar, English/French menus and direct links were checked.
- Explicit return preserved query, focus and scroll. Native browser Back restored the recorded 638px position, query and heading focus. No browser errors were reported.
- Code commit `094e1e2` was pushed to [PR #2](https://github.com/MohanedB/ResponsivePortfolio/pull/2), with a successful Vercel deployment. Direct ARCHIVERIF/TPS pages and the deployed screenshot/enlargement were verified in the existing authenticated in-app browser session. The preview retains authentication and the PR remains unmerged. Historical findings below document the earlier portfolio changes separately.

## Historical verification: initial portfolio and skill-icon updates

- At the initial review, `npm test -- --watchAll=false --runInBand` passed 9 tests across project discovery/filtering, the then-current summary modal and contact validation/sending states. Email transport was mocked; no email was sent. The modal-specific tests have since been replaced by project-page tests.
- `CI=true npm run build`: production build passed with no ESLint warnings. The existing Create React App dependencies still emit Node deprecation and stale Browserslist-data notices; updating the build toolchain is separate follow-up work.
- Chromium browser review at 320, 390, 1024 and 1440 CSS pixels: no horizontal page overflow observed. The 320-pixel project modal also had no internal horizontal overflow.
- Verified initial project visibility, Games + University filtering, French accent-insensitive search, no-result reset, mobile menu Escape/focus return, modal Tab containment/Escape/focus restoration, and body-scroll restoration.
- Verified reduced-motion preference disables the animated role text and hero SVG animation, document language updates to French, and missing images do not leave visible broken-image icons.
- No uncaught browser errors were reported during these flows. Live EmailJS delivery and a hosted deployment were not tested.
- `git diff --check`: passed.
- Skill-icon follow-up: reproduced seven failed external images, then verified all 32 skill badges render bundled 24×24 SVGs with zero skill-image requests. Desktop (1440px) and mobile (390px) checks passed, as did the production build and all nine existing tests.

# Portfolio review

Reviewed September 5, 2026.

## Structure and usability

Keep one portfolio with **All projects**, **Games**, and **Software** filters. Visitors can understand Mohaned's work immediately and then narrow it to their interests. University, CEGEP, and independent work are useful context filters, rather than separate entrances to the site. This preserves the distinction between disciplines without hiding relevant projects behind a mandatory choice.

The updated page opens directly on the introduction, puts projects immediately after it, and adds a prominent project link beside the résumé. All projects are visible initially.

## Findings addressed

- Project discovery required category choices before showing work. The unified grid now shows the work immediately, with combinable discipline/context filters, a result count, and a clear reset action.
- Search matched internal translation keys instead of displayed project names. It now searches translated titles, descriptions, technologies, and aliases, including accent-insensitive matching for Grouillère.
- Project cards were mouse-oriented clickable containers with hover-only hints. Each compact card is now a single navigation link with a persistent **More information / En savoir plus** text label. The whole card opens its shareable `/projects/:slug` page, with subtle hover and keyboard-focus feedback that respects reduced-motion preferences. The four recent additions have expanded case studies. The earlier summary modal has been replaced by these pages. A modal is used only to enlarge gallery images.
- Case-study navigation preserves the home page’s search, discipline and context filters in the URL. Pages provide contribution sections, section links, explained code excerpts, a return link, translated titles and descriptions, and a useful not-found state. Galleries include captions, optional credits and image enlargement; code excerpts expand on demand.
- The contact form used a restrictive email expression and lacked associated labels/error descriptions. It now uses browser email validity, accessible field feedback, focus on the first invalid field, and protection against duplicate submissions. Existing delivery configuration remains in place; a successful test of the UI does not establish live email delivery.
- Navigation, icon links, document language, focus indicators, and the main content landmark needed accessibility improvements. The changes add descriptive labels, a skip link, French/English document language updates, and reduced-motion behavior.
- Missing images had no fallback. Project media now falls back to a title cover. Skill badges use bundled SVG icons with colors visible on the dark background; EJS uses a local template-delimiter mark. This replaces external logo requests entirely and correctly distinguishes Visual Studio from VS Code.
- Some project destinations were mislabeled as GitHub links, and Calculator was categorized as a game. Website/file destinations now have appropriate labels, and Calculator appears under software.
- The document and manifest retained generic application metadata. They now identify Mohaned and the portfolio's purpose.

## New project content and provenance

All four additions have English and French copy. Unknown dates and academic year numbers have been omitted.

| Project | Evidence and presentation |
| --- | --- |
| **LetumLoop — TPS Prototype** | Mohaned supplied the university pitch context and first-round selection outcome, and confirmed that he built the entire prototype. The local project descriptor and C++ source establish Unreal Engine 5.7 and third-person movement, camera and rifle-combat work. The dedicated page describes jump buffering/coyote time, camera recovery, muzzle obstruction, rifle states and damage feedback. Its source snapshot includes technical work after the original pitch; the page distinguishes those stages. Two exact, owner-authorized code excerpts have plain file/revision attribution because the source repository is private. No finished deckbuilding system is claimed. |
| **Straw and Feathers** | Mohaned supplied the title, university context, completed first prototype, and ongoing development. He confirmed responsibility for all code in the current prototype, including the straw and crow controllers and switching between them. No matching public repository or game page was verified. The copy therefore does not invent an engine, additional gameplay features, release date, year of study, or playable link. |
| **Grouillère** | Mohaned identified it as a completed university game and confirmed that he built the complete character controller and all player systems, including cheese and poison mechanics. Teammates handled enemies, the ending cinematic, points, and the timer. The [team member's project write-up](https://www.therookies.co/projects/104357) confirms the accented title, third-person arcade-adventure premise, Unreal Engine 5/C++/Blueprints, and Mohaned Bouzaidi's programmer credit. The link is labeled as a team write-up, not a playable build. The author's individual level-design and technical-design contributions are not attributed to Mohaned. Its August 27, 2026 publication date is not treated as the game's release date. |
| **ARCHIVERIF** | Mohaned confirmed that he built the entire product. The [public product website](https://archiverif.ca/en) and committed frontend/backend source establish bilingual document collection, expiry reminders, nightly registry monitoring and project organization. Local manifests establish Next.js, TypeScript, FastAPI, PostgreSQL and Redis. Its dedicated page includes two authentic public-page screenshots and an owner-authorized TypeScript expiry helper with exact revision attribution. Source repositories are private; the product is the public destination. Monitoring is described as scheduled/nightly. |

The three games currently use title-only covers until authentic screenshots are supplied. No gameplay media or playable builds have been verified for those pages. Their diagrams describe implemented systems or owner-confirmed responsibilities and are not presented as gameplay captures. ARCHIVERIF’s screenshots were captured from its public English homepage; its illustrated watchlist is an example from that page, not a private customer dashboard.

See [Project case-study pages](project-case-studies.md) for durable source paths, full revision IDs, excerpt line ranges, screenshot provenance and content-maintenance instructions.

## Highest-value next improvements

1. Add a short gameplay clip and two or three real screenshots for each game. Put the core interaction first, with optional playback and captions or concise text explaining what the viewer is seeing.
2. Extend Straw and Feathers and Grouillère’s dedicated pages with source-backed technical challenges, real code and media once those files are available. Both already explain Mohaned’s confirmed contribution. Add team sizes and measured outcomes only when confirmed.
3. Add verified playable builds, release pages, or public source links where sharing is appropriate. A clearly labeled download should state its platform; unavailable builds should not appear as working buttons.
4. Keep the most representative recent projects first. Let the existing project filters serve different visitors before considering separate landing pages for individual job applications.

## Owner clarification needed

The AppDeMo project lists **March 4–May 10, 2024**, while the Montréal internship experience lists **March 4–May 10, 2025** in both languages (`education26` versus `exper3` in `I18n.js`). Confirm the correct year before changing either record.

Straw and Feathers still needs its engine and any shareable build or media. The three games need authentic gameplay captures and verified public build destinations. Straw and Feathers and Grouillère also need source files before their pages can describe implementation details beyond Mohaned’s confirmed responsibilities.

## Dedicated-page verification

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

# Project case-study pages

Implementation and content provenance, September 5, 2026.

## Implemented behavior

Project cards are real links labeled **More information / En savoir plus**. They open `/projects/:slug` pages instead of the earlier summary modal. All 14 current projects have stable slugs and pages; the four recent additions have expanded case studies. Older projects reuse their existing descriptions, contribution text, images and code where present.

Expanded pages show context, role, tools, contributions, systems, a workflow or responsibility diagram and an outcome. Gallery and code sections appear only when content exists. Section links help visitors move through long pages. External actions distinguish a product website, team write-up, public source and verified playable/download destination.

| Project | Route |
| --- | --- |
| ARCHIVERIF | `/projects/archiverif` |
| LetumLoop — TPS Prototype | `/projects/letumloop-tps` |
| Straw and Feathers | `/projects/straw-and-feathers` |
| Grouillère | `/projects/grouillere` |

`App.js` uses the existing React Router dependency. `responsiveportfolio/vercel.json` rewrites application paths to the SPA entry point for direct page requests and refreshes. Project pages update the document title and description in the current language. Unknown slugs and unmatched paths display a translated not-found page with a return link. This is an application state served through the SPA rewrite, not a server-generated HTTP 404 page.

Global navigation targets home sections from project pages. Navigation manages heading focus, anchor scrolling and saved browser-history scroll positions.

## URL filters and return navigation

| Home query parameter | Accepted values | Default |
| --- | --- | --- |
| `type` | `gamedev`, `software` | All projects |
| `context` | `University`, `Cegep`, `Independent` | All contexts |
| `q` | Search text | Empty search |

For example, `/?type=gamedev&context=University&q=grouillere#projects` opens the university-games selection with a search for Grouillère. Search ignores case, surrounding whitespace and accents. Unsupported discipline/context values behave as the default. Filter updates replace the current history entry. Reset removes these three parameters and preserves unrelated query parameters.

Cards preserve the home URL in router state. **Back to projects** returns to that URL and `#projects`. A directly opened project URL has no previous grid state, so it returns to `/#projects`. Sharing a case-study URL shares the project itself, without the sender’s earlier filters.

## Maintain project content

- `responsiveportfolio/src/data/projectUpdates.js`: recent project records and short English/French translations.
- `responsiveportfolio/src/data/const.js`: the complete project list and older project slugs.
- `responsiveportfolio/src/data/caseStudies.js`: expanded content keyed by the exact project slug.
- `responsiveportfolio/src/components/Project/ProjectDetails.jsx`: page renderer and optional sections.
- `responsiveportfolio/src/components/Project/ProjectGallery.jsx`: media and image enlargement.
- `responsiveportfolio/src/components/Project/CodeHighlights.jsx`: expandable source excerpts.

Keep slugs stable after publishing; a change requires a route redirect to preserve shared URLs. A case-study key supplements an existing project record and does not create a project by itself. Each expanded entry uses:

```js
{
  role: { en: '...', fr: '...' },
  intro: { en: '...', fr: '...' },
  systems: [
    { title: { en: '...', fr: '...' }, body: { en: '...', fr: '...' } },
  ],
  flow: {
    title: { en: '...', fr: '...' },
    steps: [{ en: '...', fr: '...' }],
  },
  outcome: { en: '...', fr: '...' },
  availability: { en: '...', fr: '...' }, // optional public availability note
  media: [],
  code: [],
}
```

Base roles, systems and outcomes on confirmed facts. Distinguish personal contributions from teammates’ work. Describe a diagram as an implementation flow only when source supports that sequence; otherwise label it as responsibilities. Omit unknown dates, team sizes, engine details, metrics and mechanics.

## Add authentic images or footage

Store shareable local assets under `responsiveportfolio/src/Image/case-studies/` and import them in `caseStudies.js`. Provide both languages for the alt text and caption:

```js
{
  kind: 'image',
  src: importedScreenshot,
  alt: { en: 'What the image shows.', fr: 'Ce que montre l’image.' },
  caption: { en: 'Context for this capture.', fr: 'Contexte de cette capture.' },
  credit: { label: 'Author or project', url: 'https://public-source.example' },
}
```

`credit` and its URL are optional. Images are lazy-loaded and can be enlarged in a labeled dialog. They are contained rather than cropped, and failed images display a readable fallback.

For a local MP4/WebM, use `kind: 'video'`, `src`, optional `poster`, and the same localized alt/caption fields. Videos have native controls, `playsInline` and `preload="none"`; they do not autoplay. For a verified embeddable video URL, use `kind: 'embed'` and optional `poster`. Its iframe loads only after the visitor presses play. Ordinary page URLs are not necessarily embeddable. These formats are supported; no gameplay videos are currently supplied for the three new games.

Prefer short, clear clips with accurate captions. Credit team media and distinguish teammates’ systems from Mohaned’s work. Do not manufacture gameplay imagery or use private customer data as product screenshots.

## Add code highlights

```js
{
  title: { en: 'The implementation idea', fr: 'L’idée d’implémentation' },
  description: { en: 'Why this matters.', fr: 'Pourquoi ce code est utile.' },
  language: 'cpp', // displayed label/class, not a syntax-coloring engine
  code: `// Exact source text`,
  source: {
    file: 'Source/Project/Component.cpp',
    revision: 'full-git-commit-sha',
    // url: only a verified public source permalink
  },
}
```

Code uses native expandable `details` sections and a keyboard-focusable horizontal scroll region. The page shows a shortened revision; the full SHA remains in the title attribute and source data. Label partial functions as excerpts. Compare text with `git show <revision>:<file>`, preserve source comments, and document omitted context in the explanation. Record the revision and line range below. Publish only authorized material without credentials or real customer data. Private source can have plain path/revision attribution without an inaccessible GitHub button.

## Verified code provenance

Mohaned confirmed sole authorship of ARCHIVERIF and the TPS prototype and requested interesting source excerpts in the portfolio. All three passages were compared exactly with committed source, including comments, on September 5, 2026. The line ranges refer to these immutable revisions.

| Repository | Full revision | Source path and lines | Published passage |
| --- | --- | --- | --- |
| `verifrbq-web` | `34093ac05f449019dee3ce5185c1ed382fcf425c` | `lib/documents.ts`, 58–75 | Complete 18-line `expiryDisplayStatus`: distinguishes expiry today from past expiry through a Montréal-local date helper and preserves missing/pending or unusable-date states. |
| `Prototype_V1_TPS_DECKBUILDER` | `294662a40f0db48ea42f00015599a931a606d895` | `Prototype_V1/Source/Counterforce/Movement/CounterforceMovementComponent.cpp`, 284–301 | Complete 18-line `CanJump_Implementation`: checks walkable ground and the finite, nonnegative, one-use coyote-time window. |
| `Prototype_V1_TPS_DECKBUILDER` | `294662a40f0db48ea42f00015599a931a606d895` | `Prototype_V1/Source/Counterforce/Camera/CounterforceCameraBoomComponent.cpp`, 35–53 | Contiguous 19-line excerpt from `BlendLocations`: immediate retraction to a safe distance and interpolated recovery. Labeled as a partial function. |

The inspected source repositories are private. The portfolio publishes short authorized passages with attribution, not full source files or private repository links. Exact excerpt verification does not establish playable behavior: no TPS engine/executable was launched during this research.

## Evidence for system descriptions

### ARCHIVERIF

Frontend: `verifrbq-web` at `34093ac05f449019dee3ce5185c1ed382fcf425c`. Backend: `verifrbq-backend` at `2bbca0e3cf87790284ab4e57c82c7897f7cbb47d`. Existing unrelated working-tree edits were not used as evidence for uncommitted features.

| System | Source evidence |
| --- | --- |
| Upload links, recognized PDF parsing and retries | Backend `api/routes/documents.py:651–793`, `api/magic_link.py:30–53`; frontend `app/upload/[token]/page.tsx`. Custom documents are stored as supplied; no authenticity guarantee is claimed. |
| Per-type reminders, deduplication, catch-up windows and Montréal dates | Backend `etl/notify_documents.py:79–171` and `:408–494`, `api/dates.py`; frontend `lib/documents.ts:43–75`. Current reminders use 30/14/day-of or 60/30/day-of by type, rather than the older README’s superseded 30/14/7 wording. |
| Registry ingestion, transitions and cache updates | Backend `etl/delta.py:33–95`, `etl/pipeline.py:185–307`, `etl/pipeline_rena.py`, `etl/pipeline_rea.py`, `etl/pipeline_oqlf.py`. Scheduled/nightly monitoring, not real-time. |
| Client-scoped projects, shared watchlists and company IDs | Backend `api/routes/projects.py:342–448`, `api/routes/watchlist.py`, `api/adapters/base.py`, `api/adapters/quebec.py`, `api/routes/documents.py:473–581`. Québec is the implemented registry adapter; other jurisdictions can use document collection without implying international registry coverage. |
| Bilingual UI and consistent summaries | Frontend `components/dashboard/DocumentsPanel.tsx`, `components/dashboard/WatchlistTable.tsx`, `lib/documents.ts:149–321`, `package.json` and locale routes. |

Public product destinations: [English](https://archiverif.ca/en), [French](https://archiverif.ca/fr). No customer counts, revenue, time savings or legal-compliance guarantees are asserted.

### LetumLoop — TPS prototype

Snapshot: `Prototype_V1_TPS_DECKBUILDER` at `294662a40f0db48ea42f00015599a931a606d895`. Its `.uproject` specifies Unreal Engine 5.7; the internal project name is Counterforce. Mohaned identified its origin as the LetumLoop school pitch, and the inspected version includes later technical development.

Paths below are relative to `Prototype_V1/Source/Counterforce/`:

| System | Source evidence |
| --- | --- |
| Movement, jump buffering, coyote time and early-release gravity | `Movement/CounterforceMovementComponent.cpp`: `GetGravity`, `CanJump_Implementation`, `TryConsumeJumpRequest`, `PerformJump`; `Movement/States/`. |
| Shoulder switching, aim transitions and collision recovery | `Movement/SimpleCharacter.cpp`: `SwapShoulder`, `ApplyCameraView`, `UpdateCameraViewTransitions`; `Camera/CounterforceCameraBoomComponent.cpp`: `BlendLocations`. |
| Camera aim, muzzle obstruction and rifle traces | `Movement/SimpleCharacter.cpp`: `TraceAimTarget`; `Weapons/CounterforceRifleComponent.cpp`: `Fire`, `TraceMuzzleObstruction`. |
| Automatic fire, ammunition and reload transitions | `Weapons/CounterforceRifleComponent.cpp`: `BeginAutomaticFire`, `BeginReload`, `CompleteReload`, `CancelReload`, `SetRifleState`; `Weapons/CounterforceRifleRuntime.h`. |
| Applied damage, health feedback and target reset | `AbilitySystem/CounterforceAttributeSet.cpp`: `PostGameplayEffectExecute`; `Combat/CounterforceDamageableActor.cpp`; `Combat/CounterforceTrainingDummy.cpp`. |

The repository name does not establish deckbuilding. The page does not claim cards, multiplayer, AI enemies, inventory, headshots, penetration or ricochet. An existing development executable was not treated as a packaged redistributable build. The only source-folder screenshot found was a 192×192 editor thumbnail; it was not added as gameplay media.

### Straw and Feathers and Grouillère

Descriptions rely on Mohaned’s confirmed contributions. Straw and Feathers: all code in prototype v1, complete straw and crow controllers, and switching between them. Grouillère: the complete character controller and character-related systems, including cheese and poison interactions; teammates handled enemies, the ending cinematic, score and timer.

The [Grouillère team write-up](https://www.therookies.co/projects/104357) supplies general context and is labeled as a team presentation, not a playable destination. Its author’s individual level/technical-design work is not attributed to Mohaned. Neither game has source-backed excerpts or supplied gameplay media in the case-study data. Do not infer flight, pickup, buff or timing architecture from names or broad contribution statements.

## Screenshot provenance

Two PNGs were captured directly from the [public ARCHIVERIF English homepage](https://archiverif.ca/en) on September 5, 2026, at 1400×900. The cookie notice was dismissed using its button. No account login, company lookup or private dashboard access occurred. Captures were not cropped, edited or synthesized.

| Portfolio asset | Public page and captured content |
| --- | --- |
| `responsiveportfolio/src/Image/case-studies/archiverif-home.png` | [ARCHIVERIF homepage](https://archiverif.ca/en), top: product introduction and the page’s built-in example watchlist illustration. |
| `responsiveportfolio/src/Image/case-studies/archiverif-document-workflow.png` | [ARCHIVERIF homepage](https://archiverif.ca/en), “Send one link. They upload in three clicks.” section: document links alongside automatic registry monitoring. |

Both assets have bilingual alt text/captions and public product credit. The illustrated watchlist is a public example, not customer dashboard data. The existing ARCHIVERIF brand cover originated from the [published brand graphic](https://archiverif.ca/brand/og-image.svg), distinct from these screenshots.

## Playable destinations and remaining media

Set a project record’s `playableUrl` only for a checked, public play/download destination. Explain platform/build status in localized availability text. Keep product sites in `website`, public repositories in `github`, and team write-ups in `website` with a translated `websiteLabelKey`.

The three new games currently have no supplied gameplay media or verified playable link. Their diagrams are labeled as implemented systems or responsibilities, and no nonfunctional play button is rendered. ARCHIVERIF links to the live product in the visitor’s current language. Game media remains pending authentic owner files or verified public sources.

## Implementation and verification status

- [x] Stable project slugs and real card links.
- [x] URL discipline/context/search filters and return to the filtered grid.
- [x] Route-aware layout, direct pages, translated metadata and not-found UI.
- [x] Four bilingual case studies with confirmed roles, source-backed ARCHIVERIF/TPS descriptions and accurate external destinations.
- [x] Captioned gallery/enlargement, video/embed support, expandable code and explanatory diagrams.
- [x] Two authentic ARCHIVERIF captures and three excerpts compared exactly with source revisions.
- [x] Repository suite: 17 passing tests across four suites, including the four gallery checks now committed in `src/components/Project/ProjectMedia.test.jsx`.
- [x] CI production build: passed; JavaScript bundle approximately 197.6 KB gzip. Existing Create React App/toolchain notices remain.
- [x] Chromium via Edge at 1440, 390 and 320 CSS pixels: all four new pages without horizontal page overflow; gallery enlargement, Escape and focus return; a 288px-wide dialog at the 320px viewport; code scrolling contained within an 8px scrollbar; EN/FR menus and direct links.
- [x] Explicit return preserved query, focus and scroll; native browser Back restored the recorded 638px position with query and heading focus. No browser errors were reported.
- [ ] Push/update the existing pull request and verify its hosted preview deployment.

Email transport remains mocked in tests; no email delivery claim is made. Hosted verification will be added after deployment checks finish.

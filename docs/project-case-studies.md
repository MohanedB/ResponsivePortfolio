# Project case-study pages

Implementation and content provenance, updated October 8, 2026. Earlier verification is recorded separately below.

## Implemented behavior

Each compact project card is a single React Router link containing a thumbnail, title, short summary, technology tags and a plain **More information / En savoir plus** text label. Clicking anywhere on the card or activating its link by keyboard opens the larger `/projects/:slug` detail page. Subtle hover and focus feedback indicates the interaction, and motion respects the visitor's reduced-motion preference. All 15 current projects have stable slugs and pages; five recent projects have expanded case studies. Older projects reuse their existing descriptions, contribution text, images and code where present.

Expanded pages show context, role, tools, contributions, systems, a workflow or responsibility diagram and an outcome. Gallery and code sections appear only when content exists. Section links help visitors move through long pages. External actions distinguish a product website, team write-up, public source and verified playable/download destination.

| Project | Route |
| --- | --- |
| ARCHIVERIF | `/projects/archiverif` |
| LetumLoop — TPS Prototype | `/projects/letumloop-tps` |
| Straw and Feathers | `/projects/straw-and-feathers` |
| Grouillère | `/projects/grouillere` |
| BouStreaming | `/projects/boustreaming` |

`App.js` uses the existing React Router dependency. `responsiveportfolio/vercel.json` rewrites application paths to the SPA entry point for direct page requests and refreshes. Project pages update the document title and description in the current language. Unknown slugs and unmatched paths display a translated not-found page with a return link. This is an application state served through the SPA rewrite, not a server-generated HTTP 404 page.

Global navigation targets home sections from project pages. Navigation manages heading focus, anchor scrolling and saved browser-history scroll positions.

## URL filters and return navigation

| Home query parameter | Accepted values | Default |
| --- | --- | --- |
| `type` | `gamedev`, `software` | All projects |
| `context` | `University`, `Cegep`, `Independent` | All contexts |
| `engine` | Dataset engine IDs: `unity`, `unreal` | All engines |
| `year` | Documented dataset years, currently `2021`–`2026`; `unspecified` is offered only if a project lacks a year, which currently applies to none | All years |
| `language` | Dataset language IDs: `cpp`, `csharp`, `javascript`, `typescript`, `python`, `java`, `swift`, `blueprints` | All languages |
| `q` | Search text | Empty search |

For example, `/?type=gamedev&context=University&q=grouillere#projects` opens the university-games selection with a search for Grouillère. Adding `engine=unreal&language=cpp&year=2026` also matches its confirmed technologies and owner-confirmed calendar year. All selected filters combine. Search ignores case, surrounding whitespace and accents, and includes readable engine/language labels and documented years. Dropdown options come from project metadata; unsupported filter values behave as the default. Filter updates replace the current history entry. Reset removes `type`, `context`, `engine`, `year`, `language` and `q` and preserves unrelated query parameters.

Every project has explicit `engines`, `years` and `languages` arrays. Straw and Feathers, ARCHIVERIF, Grouillère, LetumLoop — TPS Prototype and BouStreaming use 2026; their cards and detail-page facts display that year. Exact months, days and release dates remain unconfirmed. All current projects have a year, so **Not specified** is absent; it appears only if a future project has an empty year array. The inspected Straw V05 snapshot establishes Unreal Engine 5.7, C++ and Blueprints. See [Project discovery filters](project-filters.md) for stable IDs, all 15 metadata mappings, evidence and the separate unresolved AppDeMo/internship year discrepancy.

The card link preserves the home URL in router state. **Back to projects** returns to that URL and `#projects`. A directly opened project URL has no previous grid state, so it returns to `/#projects`. Sharing a case-study URL shares the project itself, without the sender’s earlier filters.

## Maintain project content

- `responsiveportfolio/src/data/projectUpdates.js`: recent project records and short English/French translations.
- `responsiveportfolio/src/data/const.js`: the complete project list and older project slugs.
- `responsiveportfolio/src/data/caseStudies.js`: expanded content keyed by the exact project slug.
- `responsiveportfolio/src/data/strawV05CaseStudy.js`: Straw and Feathers V05 content and local-snapshot code provenance.
- `responsiveportfolio/src/data/grouillereCaseStudy.js`: Grouillère's bilingual character-system breakdown, Fibery evidence links and confirmed contribution boundaries.
- `responsiveportfolio/src/data/boustreamingCaseStudy.js`: BouStreaming content, private-source excerpt and original brand banner.
- `responsiveportfolio/src/data/projectArtwork.js`: shared gallery objects for Grouillère's mouse illustration and Straw and Feathers' 3D character image, including English/French alt text and captions.
- `responsiveportfolio/src/components/Project/ProjectDetails.jsx`: page renderer and optional sections.
- `responsiveportfolio/src/components/Project/ProjectGallery.jsx`: media and image enlargement.
- `responsiveportfolio/src/components/Project/CodeHighlights.jsx`: expandable source excerpts.

Keep slugs stable after publishing; a change requires a route redirect to preserve shared URLs. A case-study key supplements an existing project record and does not create a project by itself. Each expanded entry uses:

```js
{
  role: { en: '...', fr: '...' },
  intro: { en: '...', fr: '...' },
  systemsTitle: { en: '...', fr: '...' }, // optional contribution-section heading
  sourcesNote: { en: '...', fr: '...' }, // optional source-access explanation
  systems: [
    {
      title: { en: '...', fr: '...' },
      body: { en: '...', fr: '...' },
      sources: [ // optional evidence links for this contribution
        { label: { en: '...', fr: '...' }, url: 'https://verified-source.example' },
      ],
    },
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

Use optional per-system `sources` for task or documentation evidence, with descriptive labels in both languages. Straw and Feathers and Grouillère use Fibery task/mechanics links. Those records may require a workspace login; `sourcesNote` explains that limitation. A source link is evidence for a contribution, not a playable build or a promise of public access. Read Fibery without changing tasks, documents, roles, status or acceptance checklists.

## Add authentic images or footage

Store shareable local assets under `responsiveportfolio/src/Image/case-studies/` and import them in `caseStudies.js` or the project's case-study module. Provide both languages for the alt text and caption:

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

Code uses native expandable `details` sections and a keyboard-focusable horizontal scroll region. Git-backed excerpts record their full commit SHA; label a local source snapshot explicitly instead of inventing a Git revision. For a local snapshot, record a source-file SHA-256 and line range in the provenance. Label partial functions as excerpts. Compare Git-backed text with `git show <revision>:<file>`, preserve source comments, and document omitted context in the explanation. Publish only authorized material without credentials or real customer data. Private source can have plain file/snapshot attribution without an inaccessible repository button.

## Verified code provenance

Mohaned confirmed sole authorship of ARCHIVERIF and the TPS prototype and requested interesting source excerpts in the portfolio. Their original three passages were compared exactly with committed source, including comments, on September 5, 2026. The V05 and BouStreaming source locations below were inspected for the October 8 update; V05 is a local snapshot without Git history. These are source-provenance records, not evidence of a successful game build or a new portfolio test run.

| Repository | Full revision | Source path and lines | Published passage |
| --- | --- | --- | --- |
| `verifrbq-web` | `34093ac05f449019dee3ce5185c1ed382fcf425c` | `lib/documents.ts`, 58–75 | Complete 18-line `expiryDisplayStatus`: distinguishes expiry today from past expiry through a Montréal-local date helper and preserves missing/pending or unusable-date states. |
| `Prototype_V1_TPS_DECKBUILDER` | `294662a40f0db48ea42f00015599a931a606d895` | `Prototype_V1/Source/Counterforce/Movement/CounterforceMovementComponent.cpp`, 284–301 | Complete 18-line `CanJump_Implementation`: checks walkable ground and the finite, nonnegative, one-use coyote-time window. |
| `Prototype_V1_TPS_DECKBUILDER` | `294662a40f0db48ea42f00015599a931a606d895` | `Prototype_V1/Source/Counterforce/Camera/CounterforceCameraBoomComponent.cpp`, 35–53 | Contiguous 19-line excerpt from `BlendLocations`: immediate retraction to a safe distance and interpolated recovery. Labeled as a partial function. |
| Straw and Feathers local V05 snapshot | No Git revision; source-file SHA-256 `C27C9B1FF65B507D141BD86D1CF90C169178C47CC3AE97CB49AB3E5652A1A1EA` | `Source/Counterforce/Player/CounterforcePlayerController.cpp`, 394–416 | Complete `StartCharacterSwitch`: resets character input, subscribes to camera-blend completion, configures the view transition and changes possession under a guard. |
| `BouStreaming` | `d1fbf45927d25174cd5b3e7e529ecfaaa087b85c` | `src/components/library/pending-removal.ts`, 220–237 | Complete `flushRemovals`: clears pending state before a focus-related callback can finalize it twice, then publishes the hidden item and starts settlement. |

The inspected repositories and the V05 source snapshot are private. The portfolio publishes short authorized passages with attribution, not full source files, private repository links or Fibery download URLs. Authorized Fibery task/document links are separate from downloads and may require workspace access. Exact excerpt verification does not establish playable behavior: no TPS engine/executable was launched during the original source research.

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

### Straw and Feathers — V05

The existing `/projects/straw-and-feathers` page now represents the advanced V05 prototype (`AdvancedPrototype`), not ongoing V1 development. Mohaned supplied the outcome that the school did not select the project. The team visuals remain preliminary; neither their polish nor the project-selection outcome determines the programming ownership described here.

Local source root: `E:/StrawsAndFeathersV05/20263-Projets3e/StrawAndFeather/StrawAndFeatherUE`. The project descriptor and inspected source establish Unreal Engine 5.7 with C++ and Blueprints. This folder has no Git snapshot; the controller file hash above identifies the inspected local version.

The October 8 follow-up inventories the full Fibery task database: **59 tasks across two pages**, with **33 records involving Mohaned**. Of those, **18 Done tasks list him as Responsible, Accountable or Consulted**, and **15 list him only as Informed**. The review was strictly read-only. Mohaned requested complete task-level coverage and explicitly authorized the case study's Fibery links; access to those records may still require the reader's workspace account.

Primary evidence includes the [task board](https://cnm-mtl.fibery.io/StrawAndFeather/13080), [Mohaned's technical-proof reflection](https://cnm-mtl.fibery.io/StrawAndFeather/13753), [technical design document](https://cnm-mtl.fibery.io/StrawAndFeather/12568), [QA document](https://cnm-mtl.fibery.io/StrawAndFeather/12535), [technical-proof document](https://cnm-mtl.fibery.io/StrawAndFeather/14416), and [the other programmer's reflection](https://cnm-mtl.fibery.io/StrawAndFeather/13752). The freshly read reflection establishes direct work beyond what a RACI label alone proves.

#### Complete Responsible / Accountable / Consulted task matrix

Every task in this table is recorded as **Done**. The scope column bounds the portfolio claim; status alone does not establish sole authorship or a newly verified acceptance test.

| Task | Exact Fibery title | Mohaned's role | Contribution scope |
| --- | --- | --- | --- |
| [37](https://cnm-mtl.fibery.io/StrawAndFeather/Task/37) | `camera-switch` | Responsible | Character/camera switching, including gameplay and animation sequencing. |
| [38](https://cnm-mtl.fibery.io/StrawAndFeather/Task/38) | `movement-scarecrow` | Responsible | Scarecrow movement/controller implementation and integration. |
| [40](https://cnm-mtl.fibery.io/StrawAndFeather/Task/40) | `interaction-carry_object_as_crow` | Responsible | Reusable carrying components, grab/drop and automatic release when switching away from the Crow. |
| [43](https://cnm-mtl.fibery.io/StrawAndFeather/Task/43) | `movement-playercrow` | Responsible | Playable Crow movement/controller implementation. |
| [49](https://cnm-mtl.fibery.io/StrawAndFeather/Task/49) | `fibery-technical_document` | Responsible (shared), Accountable | Shared technical documentation and implementation conventions. |
| [50](https://cnm-mtl.fibery.io/StrawAndFeather/Task/50) | `fibery-quality_document` | Responsible | Shared QA documentation and review conventions, not a claim that every check passed. |
| [62](https://cnm-mtl.fibery.io/StrawAndFeather/Task/62) | `interaction-item_receiver` | Responsible | Typed item receivers, acceptance/rejection Blueprint events and hook/censer door integration. |
| [63](https://cnm-mtl.fibery.io/StrawAndFeather/Task/63) | `ability-activateCenser` | Responsible | Censer activation within the Scarecrow's aura and its carrying/receiver integration. |
| [39](https://cnm-mtl.fibery.io/StrawAndFeather/Task/39) | `ability-crow_vision` | Accountable | Oversight and coordination; do not attribute the teammate's vision implementation to Mohaned. |
| [41](https://cnm-mtl.fibery.io/StrawAndFeather/Task/41) | `interaction-death` | Accountable | Reflection confirms direct death-animation integration through `HandleDeath`; do not claim sole authorship of respawn. |
| [42](https://cnm-mtl.fibery.io/StrawAndFeather/Task/42) | `interaction-traps` | Accountable | Oversight and coordination; trap implementation belongs to the other programmer. |
| [45](https://cnm-mtl.fibery.io/StrawAndFeather/Task/45) | `ability-scare` | Accountable | Reflection confirms direct gameplay/animation integration, action lockouts and animation restoration; the underlying scare ability is shared work. |
| [57](https://cnm-mtl.fibery.io/StrawAndFeather/Task/57) | `anim-create_player_abp` | Accountable | Reflection confirms direct player Animation Blueprint integration, Plant/Unplant sequencing and Anim Notifies; animation assets are teammates' work. |
| [68](https://cnm-mtl.fibery.io/StrawAndFeather/Task/68) | `interaction-enemy_crow` | Accountable | Oversight and coordination; enemy-crow implementation belongs to the other programmer. |
| [24](https://cnm-mtl.fibery.io/StrawAndFeather/Task/24) | `techart-crow vision shader` | Consulted | Consultation on the Crow vision shader; no shader authorship claim. |
| [33](https://cnm-mtl.fibery.io/StrawAndFeather/Task/33) | `vfx-scarecrow scare` | Consulted | Consultation on scare feedback; no VFX asset authorship claim. |
| [34](https://cnm-mtl.fibery.io/StrawAndFeather/Task/34) | `vfx-censer` | Consulted | Consultation on censer feedback; no VFX asset authorship claim. |
| [48](https://cnm-mtl.fibery.io/StrawAndFeather/Task/48) | `design-core-gameplay-tuning` | Consulted | Consultation on core gameplay tuning; do not present this as sole game-design ownership. |

The **15 Informed-only** records are tasks **2, 3, 4, 5, 9, 11, 12, 13, 14, 47 and 60** (Done), and **16, 17, 20 and 21** (Cancelled). Task 60 is `chara-crow texture`. These records establish project awareness, not implementation credit; they are excluded from the personal contribution matrix.

#### Contribution detail recovered in the follow-up

The earlier summary did not adequately explain the following work confirmed in Mohaned's reflection and linked tasks:

- **Switching and animation sequencing:** Plant/Unplant transitions, player Animation Blueprint states and Anim Notifies connect presentation to the character/camera switch.
- **Scare integration:** movement, switching and repeat-trigger restrictions during the scare, followed by restoration of normal animation behavior. This is Mohaned's integration work, not sole authorship of the teammate's scare system or animation assets.
- **Death integration:** `HandleDeath` provides a Blueprint-overridable entry point so a death animation can finish before respawn.
- **Object interaction architecture:** reusable carryable components, physics-body lookup, grab/drop, automatic release, typed receivers and Blueprint acceptance/rejection events. The hook/censer interaction connects object placement with opening a door.
- **Technical and QA work:** shared documentation, validation criteria and Perforce review conventions, with source links to the exact tasks and documents.

The inspected local snapshot corroborates `StartCharacterSwitch` and completion hooks in `Source/Counterforce/Player/CounterforcePlayerController.cpp`, the scare switch guard in the same file, `HandleDeath` in its header, carryable state/physics restoration in `Source/Counterforce/Interaction/Carry/CarryableComponent.cpp`, typed receiver events in `Source/Counterforce/Interaction/Items/InteractionReceiverComponent.cpp`, and censer activation in `Source/Counterforce/Interaction/Censer/CenserComponent.cpp`. The snapshot's carryable physics lookup uses the owner's root primitive component. Its default C++ `HandleDeath` immediately calls `Respawn`; the delayed animation sequence is Blueprint integration described in Fibery. Plant/Unplant assets and player Animation Blueprints exist, but binary `.uasset` files do not expose their graph logic to this source inspection. Do not misrepresent the old local snapshot as exhaustive evidence of later documented work.

Mohaned's earlier statement that he wrote all V1 code applies to that earlier prototype only. It is not a blanket ownership claim for the team-built V05. Teammates created character models, textures, animations and VFX and implemented other gameplay systems. Accountable or Consulted roles are retained explicitly; direct implementation is attributed only where the reflection or source supports it.

Task 62 is marked Done but still contains pending validation notes for item compatibility/rejection, normal dropping, door collision and receiver detection/radius adjustments. Original task acceptance checklists are project records, not fresh QA verification performed for this portfolio update. The QA entry **Camera Ceiling Clipping — Fixed** has no assignee, so its fix is not attributed to Mohaned.

No gameplay image or video was embedded in the inspected reflections; the queried carry/receiver/censer tasks and Technical Proof level returned no file attachments. Mohaned subsequently supplied a replacement 3D character image showing a Scarecrow with a glowing face and a Crow against a dark background, for the card and gallery. Its specific artist and capture context have not been confirmed; it is not presented as a gameplay screenshot or runtime verification. No public playable build has been supplied. Future gameplay captures should identify the V05 stage and credit team visuals; private Fibery downloads must not become public portfolio links.

### Grouillère

Mohaned confirmed that he implemented the complete character/controller and related player systems, including cheese and poison interactions. Teammates handled enemies, the ending cinematic, score and timer. This owner confirmation establishes the personal scope; the Fibery records describe the systems within it. The expanded bilingual content lives in `responsiveportfolio/src/data/grouillereCaseStudy.js` and retains the existing `/projects/grouillere` route and owner-confirmed 2026 year.

The read-only research identifies the project in Fibery's `H26-CJV1410-Taz` space, whose [positioning record](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Positionnement/1) uses the earlier title **Grouyère**. The [character Maude](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Positionnement/3) and tornado/Taz movement match the [public team write-up](https://www.therookies.co/projects/104357). The [task board](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/8577) documents the team's work. Earlier internal names are provenance, not replacements for the portfolio title. The write-up remains a team presentation rather than a playable destination; its publication date is not treated as the game's release date.

The inventory covers **149 tasks across two pages (100 + 49)**, plus 16 mechanics, nine agents and five QA records. The detailed evidence export includes 20 task records, 11 current mechanics and four relevant agents. **The task schema has no assignee field: `Created By` identifies the record's author, not its programmer.** This inventory is not a claim that Mohaned implemented all 149 tasks. It combines his confirmed scope with documented mechanics and task status without assigning teammates' work to him.

| Contribution area | Verified records | Supported description and limits |
| --- | --- | --- |
| Walking and tornado controller | [Walking — mechanic 14](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/14), [tornado — 15](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/15), [transitions — 2](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/2); [controller prototype A — task 21](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/21) and [B — 22](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/22), both Done | Precise camera-relative walking contrasts with slippery, inertial camera-relative tornado movement. Speed thresholds enter and leave tornado mode. There is no manual brake; walls and passive speed loss help the player slow down. No threshold values or internal state-machine architecture are inferred. |
| Speed and terrain tuning | [Slopes — mechanic 7](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/7); [ramps — task 40](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/40), [speed curve — 88](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/88), [slope-variable tools — 89](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/89), all Done | Uphill travel reduces speed and downhill travel increases it. Tasks 88/89 establish completed tuning work by title/status only; they do not establish a specific curve, formula or editor architecture. |
| Jumping and ground contact | [Jump — mechanic 1](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/1); [coyote jump — task 55](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/55), [ground snapping — 140](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/140), both Done | Input triggers a jump. The completed task titles support coyote-jump and ground-snapping work, without establishing timing windows, traces or algorithms. The word “parfait” in task 140's title is not a quality guarantee. |
| Wall and tire interactions | [Wall slowdown — mechanic 6](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/6), [bouncing objects — 5](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/5), [tire — agent 4](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/4); [bouncing actor integration — task 36](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/36), [consecutive bounce safeguard — 108](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/108), both Done | Tires bounce the player with added speed. Wall impacts remove speed; closely spaced impacts increase the reduction, which resets after an interval. Task 108's illustrative numbers are not treated as verified runtime constants. The later tire contact-point rework in task 146 remains awaiting validation. |
| Camera and input options | [Camera — mechanic 17](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/17); tasks [50](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/50), [51](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/51), [53](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/53), [56](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/56), [90](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/90), [91](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/91), [92](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/92), all Done | Manual camera movement and automatic adjustment after inactivity in tornado mode; documented recentering, sensitivity, input remapping, inverted Y, clamping and separate X/Y sensitivity. Task 53 asks for smoother recentering but does not prove a particular interpolation implementation; task 90 supplies title/status evidence for autofocus. |
| Cheese speed boost | [Speed boost — mechanic 8](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/8), [cheese — agent 9](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/9); [task 45](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/45), Done | Collecting cheese increases speed. No boost amount, duration or stacking behavior is documented. |
| Rat-poison pickup | [Rat poison — agent 8](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/8); [task 43](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/43), Done | Contact in tornado mode collects poison and reduces score. Mohaned's player/pickup integration is distinct from the teammate-owned score system. This record does not describe a poison slowdown or timed debuff. |
| Poison-pit recovery | [Poison pit — agent 6](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/6), [stun — mechanic 16](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/16); [death pits — task 61](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/61), Done | The pit removes speed and exits tornado mode, uses a fade while returning the character to a recorded valid position, applies a stun duration defined in the player DataAsset, then restores movement. No numeric duration or source-level implementation is inferred. |

Done status is a historical project record, not fresh runtime validation. Tasks 43/45 and sensitivity task 50 retain unchecked acceptance items. [Task 146](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/146), tire contact-point rework, and [task 165](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/165), animation integration, are **En cours (À valider)**; [task 94](https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/94), speed-particle detection, is **À faire**. They are not promoted to completed features. The outdated water mechanic is omitted. QA/playtest suggestions do not establish final fixes, performance measurements or a newly tested build.

No Grouillère source code was supplied or inspected, so there is no code excerpt and no claim about unverified algorithms. The owner-provided mouse illustration remains on the card and gallery with no unconfirmed artist credit. No new gameplay capture or public playable link is added. Fibery links may require workspace access, and no Fibery records were modified.

### BouStreaming

Private source root: `E:/GitHub/BouStreaming`, inspected commit `d1fbf45927d25174cd5b3e7e529ecfaaa087b85c`. The documented stack is Next.js, React, TypeScript, Tailwind and Supabase/PostgreSQL. BouStreaming is working with restricted access. A legal-content version is planned, not presented as already released. No public external URL is supplied, and the private repository is not a visitor destination.

The case-study module is `responsiveportfolio/src/data/boustreamingCaseStudy.js`. Its `flushRemovals` excerpt shows the ordering used to settle a deferred removal while accounting for focus callbacks; it is attributed to the exact commit and file above. Source inspection does not establish public availability or a newly tested deployment.

## Media provenance

Two PNGs were captured directly from the [public ARCHIVERIF English homepage](https://archiverif.ca/en) on September 5, 2026, at 1400×900. The cookie notice was dismissed using its button. No account login, company lookup or private dashboard access occurred. Captures were not cropped, edited or synthesized.

| Portfolio asset | Public page and captured content |
| --- | --- |
| `responsiveportfolio/src/Image/case-studies/archiverif-home.png` | [ARCHIVERIF homepage](https://archiverif.ca/en), top: product introduction and the page’s built-in example watchlist illustration. |
| `responsiveportfolio/src/Image/case-studies/archiverif-document-workflow.png` | [ARCHIVERIF homepage](https://archiverif.ca/en), “Send one link. They upload in three clicks.” section: document links alongside automatic registry monitoring. |

Both assets have bilingual alt text/captions and public product credit. The illustrated watchlist is a public example, not customer dashboard data. The existing ARCHIVERIF brand cover originated from the [published brand graphic](https://archiverif.ca/brand/og-image.svg), distinct from these screenshots.

BouStreaming's original banner was copied from `E:/GitHub/BouStreaming/android/app/src/main/res/drawable-xhdpi/banner.png` into `responsiveportfolio/src/Image/case-studies/boustreaming-banner.png`. It is genuine project brand artwork, not an application screenshot, video still or proof of publicly available content. Do not caption it as a product-interface capture.

Mohaned supplied a mouse illustration for Grouillère and a replacement 3D character image for Straw and Feathers, explicitly requesting their use for those games. They are stored as unchanged local PNG copies:

| Portfolio asset | Owner-provided attachment | Content and use |
| --- | --- | --- |
| `responsiveportfolio/src/Image/case-studies/grouillere-character.png` | `C:/Users/Mohaned/AppData/Local/Temp/codex-clipboard-58914814-92a0-49c9-9cf0-72bce635744b.png` | First attachment: the mouse character illustration for Grouillère's card and gallery. |
| `responsiveportfolio/src/Image/case-studies/straw-and-feathers-characters.png` | `C:/Users/Mohaned/AppData/Local/Temp/codex-clipboard-dcd88baa-e03d-4ebc-b25c-4499a68b8a57.png` | Replacement attachment: a 3D Scarecrow with a glowing face and a Crow against a dark background, for Straw and Feathers' card and gallery. |

The original attachment paths record provenance and are not public destinations. `projectArtwork.js` exports shared gallery objects with English/French alt text and captions distinguishing Grouillère's illustration from Straw's 3D character image. No specific artist attribution is confirmed; supplying an image does not establish that Mohaned created it. Cards use `object-fit: contain` with matching backgrounds, including a dark background for Straw, so the complete characters remain visible. Gallery enlargement presents the same images. Neither image is presented as a gameplay screenshot or runtime verification, and no public playable link is added.

## Playable destinations and remaining media

Set a project record’s `playableUrl` only for a checked, public play/download destination. Explain platform/build status in localized availability text. Keep product sites in `website`, public repositories in `github`, and team write-ups in `website` with a translated `websiteLabelKey`.

Straw V05 now has an owner-provided 3D character image and Grouillère has a mouse illustration on their cards and in their galleries. LetumLoop TPS retains a title cover. All three games still lack confirmed gameplay captures and a verified public playable link. Their diagrams are labeled as implemented systems or responsibilities, and no nonfunctional play button is rendered. ARCHIVERIF links to the live product in the visitor's current language. BouStreaming has restricted access and no public external destination; its planned legal-content version must not be presented as available. Authentic gameplay clips, interface captures and shareable builds remain separate follow-ups.

## Grouillère Fibery update — verification

The Grouillère update adds eight bilingual sections and 21 source links on `codex/grouillere-fibery-details`. All 24 tests across four suites pass, and the CI production build compiles successfully with 213.5 KB gzip main JavaScript. A content check verifies all 47 localized fields, the evidence links and the preserved artwork; independent review found no actionable issues. Browser visual inspection remains unavailable after the earlier URL-policy block, and the game itself was not run. [PR #5](https://github.com/MohanedB/ResponsivePortfolio/pull/5), covering the previous updates, has been merged. This update preserves the 2026 project year and public team write-up; it adds neither a source excerpt nor a public playable destination. Fibery remained read-only.

## Historical verification — character image follow-up

The initial image follow-up passed all 24 tests across four suites; those tests were not rerun for the single-image replacement. The replacement Straw 3D image matches its new attachment hash, and the fresh production build passes with 210.38 KB gzip main JavaScript. Its bilingual descriptions and dark card background are updated; Grouillère is unchanged. Browser visual inspection remains unavailable after the earlier URL-policy block. No new playable destination is added.

## Historical verification — October 8 Fibery coverage follow-up

This follow-up added 11 bilingual contribution sections and authorized Fibery source links, with translated headings and a source-access note. All 24 tests across four suites passed. The CI production build passed with 209.54 KB gzip main JavaScript and the existing toolchain notices. A direct comparison with the complete Fibery inventory confirmed links to all 18 Responsible/Accountable/Consulted tasks, bilingual labels, and the unchanged exact V05 source excerpt. The initial validation caught a missing JSX closing tag in the new source-link layout; it was fixed before these passing runs. Fresh browser visual inspection remained unavailable after the browser tool's URL-policy block. [PR #5](https://github.com/MohanedB/ResponsivePortfolio/pull/5) was open at that checkpoint and has since been merged. Fibery was not modified.

## Historical verification — October 8 V05/BouStreaming update

Before the Fibery coverage follow-up, the content update added BouStreaming as the fifteenth project and fifth 2026 entry, and replaced Straw's V1-only case study with the source-backed V05 presentation. The following results apply to that earlier state:

- `npm test -- --watchAll=false --runInBand` passed all 24 tests across four suites.
- `CI=true npm run build` compiled successfully, with 205.01 KB gzip main JavaScript and the existing Node/Browserslist notices.
- Both new excerpts exactly match the recorded V05 snapshot and BouStreaming commit. The copied BouStreaming banner's hash matches the original asset.
- The development server compiled on port 3000. Browser inspection was blocked by the browser tool's URL security policy; no visual or interaction verification was claimed for that update.

## Historical verification — before the V05/BouStreaming update

The following results describe the earlier four-case-study and discovery-filter work. They do not validate the October 8 content update.

- [x] Stable project slugs and real card links.
- [x] URL discipline/context/search filters and return to the filtered grid.
- [x] Route-aware layout, direct pages, translated metadata and not-found UI.
- [x] Four bilingual case studies with confirmed roles, source-backed ARCHIVERIF/TPS descriptions and accurate external destinations.
- [x] Captioned gallery/enlargement, video/embed support, expandable code and explanatory diagrams.
- [x] Two authentic ARCHIVERIF captures and three excerpts compared exactly with source revisions.
- [x] Repository suite: 24 passing tests across four suites, including combined engine/year/language filters, the four projects selected by the 2026 year filter, reset/invalid values, bilingual return context and the four gallery checks in `src/components/Project/ProjectMedia.test.jsx`.
- [x] CI production build: passed; JavaScript bundle approximately 197.6 KB gzip. Existing Create React App/toolchain notices remain.
- [x] Chromium via Edge at 1440, 390 and 320 CSS pixels: all four new pages without horizontal page overflow; gallery enlargement, Escape and focus return; a 288px-wide dialog at the 320px viewport; code scrolling contained within an 8px scrollbar; EN/FR menus and direct links.
- [x] Explicit return preserved query, focus and scroll; native browser Back restored the recorded 638px position with query and heading focus. No browser errors were reported.
- [x] Pushed code commit `094e1e2` to [PR #2](https://github.com/MohanedB/ResponsivePortfolio/pull/2). Vercel reported a successful deployment; direct ARCHIVERIF and TPS pages, the product screenshot and image enlargement were verified in the existing authenticated in-app browser session.

Email transport was mocked in these tests; no email delivery claim was made. At that verification point, the branch preview retained Vercel authentication and the pull request was unmerged.

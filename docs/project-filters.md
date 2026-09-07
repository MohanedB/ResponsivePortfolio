# Project discovery filters

The project grid combines discipline, project context, game engine, calendar year, programming language and text search. A project must match every selected filter. Each dropdown selects one value; a project can belong to several values through its metadata arrays. All projects remain visible when no filters are selected.

## URL behavior

| Query parameter | Values | Default |
| --- | --- | --- |
| `type` | `gamedev`, `software` | All projects |
| `context` | `University`, `Cegep`, `Independent` | All contexts |
| `engine` | Engine IDs present in the dataset: currently `unity`, `unreal` | All engines |
| `year` | Documented years present in the dataset, currently `2021`–`2025`; `unspecified` selects projects with no confirmed year | All years |
| `language` | Language IDs present in the dataset, listed below | All languages |
| `q` | Search text | Empty search |

For example, `/?type=gamedev&engine=unity&year=2025&language=csharp#projects` selects the documented 2025 Unity/C# games. `/?year=unspecified#projects` selects the four recent projects whose calendar years have not been confirmed.

Dropdown options come from the current dataset. Unsupported query values behave as the corresponding All option. Labels are translated; URL IDs remain stable across English and French. Text search ignores case, accents and surrounding whitespace and includes displayed project text, tags, aliases, human-readable engine/language labels and documented years.

Filter changes replace the current history entry. Reset clears `type`, `context`, `engine`, `year`, `language` and `q` while preserving unrelated parameters. Each project card carries the filtered home URL in router state, so **Back to projects** restores the same selection. Opening a detail page directly returns to `/#projects`.

## Metadata contract

Every project in `responsiveportfolio/src/data/const.js` or the `recentProjects` array in `responsiveportfolio/src/data/projectUpdates.js` explicitly defines:

```js
engines: ['unity'],
years: ['2025'],
languages: ['csharp'],
```

- `engines`: game-engine IDs. Supported IDs are `unity` and `unreal`. Software projects without a game engine use `[]`; an unconfirmed engine also remains `[]`.
- `years`: strings naming documented calendar years, independent of academic labels such as `YEAR1`. Use `[]` when the year is unknown. The UI's `unspecified` sentinel is not stored in project metadata. If an explicitly documented project period spans several years, list each of those years.
- `languages`: stable IDs for demonstrated programming languages or Blueprint visual scripting: `cpp`, `csharp`, `javascript`, `typescript`, `python`, `java`, `swift`, `blueprints`. Use `[]` when unconfirmed. Tools, databases and frameworks are still available as tags but are not classified as languages.

An empty engine or language array matches the corresponding All option, but no specific engine/language selection. An empty year array also matches the localized **Not specified** option. Do not derive missing metadata from repository names, commit dates, page publication dates, school years, status labels or the technologies listed in the general skills section.

## Current mapping and evidence

Older project years mirror their existing English/French project-date text in `src/components/Internationalization/I18n.js`. Their engine and language metadata comes from the project's displayed tags and existing `proudCodeLang`. This preserves current portfolio claims; it is not a fresh audit of those older repositories.

| Project | Engines | Calendar years | Languages | Evidence |
| --- | --- | --- | --- | --- |
| Straw and Feathers | — | — | — | Engine, languages and calendar year await owner confirmation. |
| ARCHIVERIF | — | — | `typescript`, `python` | Inspected frontend/backend source documented in the case-study provenance. Calendar year unconfirmed. |
| Grouillère | `unreal` | — | `cpp`, `blueprints` | Existing project tags and verified team write-up. Calendar year unconfirmed. |
| LetumLoop — TPS Prototype | `unreal` | — | `cpp` | Inspected Unreal/C++ source documented in the case-study provenance. Calendar year unconfirmed. |
| Paysage-Meloche | — | `2023` | `javascript` | Date key `education11`; JavaScript excerpt label. |
| HalalBites | — | `2024` | `javascript`, `java` | Date key `education20`; JavaScript/Java SpringBoot tags and Java excerpt label. |
| Pet-Clinic | — | `2023` | `javascript` | Date key `education14`; JavaScript tag and excerpt label. |
| AppDeMo | — | `2024` | `javascript` | Date key `education26`; JavaScript excerpt label. See discrepancy below. |
| Calculator | — | `2021` | `csharp` | Date key `education5`; C# tag and excerpt label. |
| QuizApp | — | `2022` | `swift` | Date key `education8`; Swift tag and excerpt label. |
| Fallen God | `unity` | `2022` | `csharp` | Date key `education17`; Unity/C# tags and C# excerpt label. |
| QuickReload | `unity` | `2024` | `csharp` | Date key `education23`; Unity/C# tags and C# excerpt label. |
| Robot Control in Unity | `unity` | `2025` | `csharp` | Date key `UEDU2`; Unity/C# tags and C# excerpt label. |
| The Great Game of War | `unity` | `2025` | `csharp` | Date key `UEDU5`; Unity/C# tags and C# excerpt label. |

AppDeMo's displayed project date is March 4–May 10, **2024**, while the Montréal internship experience uses March 4–May 10, **2025** (`education26` versus `exper3`). Its filter metadata deliberately follows the existing project display. Neither date is corrected by this change; the owner must confirm the right year before reconciling them.

All four recent projects keep empty year arrays. Grouillère's teammate-article publication date is not treated as its release year, and Git history is not used to assign years to ARCHIVERIF or LetumLoop. Straw and Feathers' controller work does not establish its engine or programming language.

See [Project case-study pages](project-case-studies.md) for the recent projects' source and media provenance. Gameplay captures, playable builds and additional source-backed content remain separate follow-ups.

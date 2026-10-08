# Mohaned Bouzaidi — Portfolio

Bilingual React portfolio for 15 games, prototypes and software projects. Visitors see all work immediately and can combine Games/Software filters with project context, game engine, calendar year, programming language and search. Each compact project card links to its dedicated `/projects/:slug` page and includes a persistent More information text label; ARCHIVERIF, LetumLoop TPS, Straw and Feathers V05, Grouillère and BouStreaming have expanded case studies.

## Run locally

From the repository root:

```powershell
cd responsiveportfolio
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). The app uses the existing Create React App toolchain.

## Project navigation

Examples: `/projects/archiverif`, `/projects/letumloop-tps`, `/projects/straw-and-feathers`, `/projects/grouillere`, `/projects/boustreaming`. Straw V05 keeps the existing Straw and Feathers slug. Every project record has a stable slug. Unknown addresses show a translated not-found page with a return link.

Home filters live in the URL: `type=gamedev|software`, `context=University|Cegep|Independent`, `engine=unity|unreal`, `year=YYYY`, `language=language ID`, and `q=search text`. Current years span 2021–2026. For example, `/?type=gamedev&engine=unity&year=2025&language=csharp#projects` opens the matching Unity/C# games; `/?year=2026#projects` selects the five recent projects. Options come from confirmed project metadata, and selected filters combine. A localized **Not specified** option (`year=unspecified`) appears only when a project has no year; all current projects have one. Unsupported filter values behave as All. Reset clears these six parameters and preserves unrelated parameters. Opening a case study from the filtered grid preserves its return URL. A directly opened project page returns to `/#projects`.

The included `vercel.json` SPA rewrite supports application routes on Vercel. Other static hosts need an equivalent fallback to `index.html` for direct project-page requests and refreshes.

## Verify

```powershell
npm test -- --watchAll=false --runInBand
npm run build
```

The Grouillère Fibery update passes all 24 tests across four suites and the CI production build (213.5 KB gzip main JavaScript). Content validation checks its eight bilingual sections, 47 localized fields, 21 source links and preserved artwork. Independent review found no actionable issues. Browser visual inspection remains unavailable after the browser tool's earlier URL-policy block; previous Chromium checks predate this update. The dataset contains 15 projects, including five from 2026. Email transport is mocked; no test email is sent. Detailed current and historical results are recorded in the project documentation.

## Update content

- `src/data/projectUpdates.js`: recent project records and their English/French copy.
- `src/data/const.js`: previous projects, skills, education and experience records.
- `src/data/caseStudies.js`: expanded bilingual content keyed by project slug: role, introduction, systems, workflow/responsibilities, outcome, availability, media and code.
- `src/data/strawV05CaseStudy.js`: the advanced Straw V05 case study, scoped team contributions and local-source excerpt.
- `src/data/grouillereCaseStudy.js`: Grouillère's character-system breakdown, Fibery task/mechanics links and confirmed contribution boundaries, without a source-code excerpt.
- `src/data/boustreamingCaseStudy.js`: BouStreaming's restricted-access case study, private-source excerpt and original banner.
- `src/data/projectArtwork.js`: shared gallery objects for Grouillère's mouse illustration and Straw and Feathers' 3D character image, with English/French alt text and captions.
- `src/components/Internationalization/I18n.js`: existing translations.
- `src/Image/`: local images. `src/Image/case-studies/` holds public-page captures, project brand artwork and owner-provided character images. Projects without an image use a title cover.
- `src/components/Skills/SkillIcon.jsx`: bundled icons for the skill labels; no external image hosting is needed.

Give every project a unique, stable `slug`; add its expanded content under the same key in `caseStudies.js`. Define explicit `engines`, `years` and `languages` arrays using confirmed metadata; unknown values remain empty. The five recent projects use `years: ['2026']` and show that year on cards and detail-page facts. Exact months, days and release dates are not inferred. Straw's inspected V05 snapshot establishes Unreal Engine 5.7, C++ and Blueprints; BouStreaming's private source establishes Next.js/React, TypeScript, Tailwind and Supabase/PostgreSQL. See [Project discovery filters](../docs/project-filters.md) for stable IDs, the complete mapping and the separate AppDeMo/internship date discrepancy. Use `github` only for verified public source repositories. Use `website` and an optional `websiteLabelKey` for product sites, files or team showcases. Set `playableUrl` only for a verified public playable or download destination. Omit unavailable links and unknown dates. Add a `whatIDidKey` for confirmed personal contributions.

Gallery items support `image`, `video` and click-to-load `embed` media with localized `alt`/`caption`, optional `poster`, and optional credit. Import local images into the data file. Images can be enlarged; videos use controls and do not autoplay. Code items use localized `title`/`description`, a language label, the exact source text and source file/revision attribution. Public source URLs are optional and must be accessible. The renderer hides sections without content and lets visitors expand code excerpts on demand.

Grouillère's expanded case study uses read-only Fibery evidence from `H26-CJV1410-Taz`: walking/tornado control, speed and terrain, jumping and bounces, camera/input options, cheese, poison pickup and poison-pit recovery. The 149-task inventory has no assignee field; record authors are not treated as programmers. Personal scope comes from Mohaned's confirmation, with enemies, ending cinematic, score and timer credited to teammates. Linked task/mechanics records may require workspace access. No Grouillère source code is available, so its code section remains absent; the 2026 year, mouse illustration and public team write-up are preserved. See the [Grouillère evidence matrix](../docs/project-case-studies.md#grouill%C3%A8re) for task status and claim boundaries.

See [Project case-study pages](../docs/project-case-studies.md) for complete data examples, route/filter behavior, media guidance, exact source revisions or local-file hashes, excerpt line ranges, and asset provenance. The content includes five source excerpts, two public ARCHIVERIF screenshots and BouStreaming's genuine project banner, which is brand artwork rather than an interface screenshot. Mohaned supplied Grouillère's mouse illustration and Straw and Feathers' replacement 3D image of a glowing-faced Scarecrow and a Crow on a dark background, copied unchanged into `src/Image/case-studies/grouillere-character.png` and `src/Image/case-studies/straw-and-feathers-characters.png`. Their cards show the complete characters using `object-fit: contain` and matching backgrounds; galleries use shared bilingual data from `projectArtwork.js`. No specific artist is confirmed, and neither image is presented as a gameplay screenshot or runtime verification. Straw V05 is an advanced team prototype that was not selected by the school; its preliminary visuals and other contributors' systems are distinguished from Mohaned's programming. LetumLoop TPS retains a title cover. Confirmed gameplay captures and public playable links for the three games remain unavailable; the image update adds no playable destination. BouStreaming is working with restricted access, its legal-content version is planned, and no public external URL is supplied.

Contact delivery uses the existing EmailJS service in `Contact.js`. A successful build and mocked tests do not verify live delivery or the service's allowed origins.

See [the portfolio review](../docs/portfolio-review.md) for remaining content gaps, verification history and recommended improvements.

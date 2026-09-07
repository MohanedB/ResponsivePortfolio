# Mohaned Bouzaidi — Portfolio

Bilingual React portfolio for games, prototypes and software projects. Visitors see all work immediately and can combine Games/Software filters with project context, game engine, calendar year, programming language and search. Each compact project card links to its dedicated `/projects/:slug` page and includes a persistent More information text label; ARCHIVERIF, LetumLoop TPS, Straw and Feathers, and Grouillère have expanded case studies.

## Run locally

From the repository root:

```powershell
cd responsiveportfolio
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). The app uses the existing Create React App toolchain.

## Project navigation

Examples: `/projects/archiverif`, `/projects/letumloop-tps`, `/projects/straw-and-feathers`, `/projects/grouillere`. Every project record has a stable slug. Unknown addresses show a translated not-found page with a return link.

Home filters live in the URL: `type=gamedev|software`, `context=University|Cegep|Independent`, `engine=unity|unreal`, `year=YYYY|unspecified`, `language=language ID`, and `q=search text`. For example, `/?type=gamedev&engine=unity&year=2025&language=csharp#projects` opens the matching Unity/C# games. Options come from confirmed project metadata, and selected filters combine. Unsupported filter values behave as All. Reset clears these six parameters and preserves unrelated parameters. Opening a case study from the filtered grid preserves its return URL. A directly opened project page returns to `/#projects`.

The included `vercel.json` SPA rewrite supports application routes on Vercel. Other static hosts need an equivalent fallback to `index.html` for direct project-page requests and refreshes.

## Verify

```powershell
npm test -- --watchAll=false --runInBand
npm run build
```

The repository suite contains 24 tests across four suites covering project discovery, shareable links, translated search, combined engine/year/language filters, unspecified years, invalid filter values, complete reset, direct case-study rendering, preserved return filters, French content/product links, unknown slugs, gallery behavior and contact validation/sending states. Email transport is mocked; no test email is sent. The filter update was checked in Chromium on desktop and at 390 and 320 CSS pixels. Detailed verification results are recorded in the project documentation.

## Update content

- `src/data/projectUpdates.js`: recent project records and their English/French copy.
- `src/data/const.js`: previous projects, skills, education and experience records.
- `src/data/caseStudies.js`: expanded bilingual content keyed by project slug: role, introduction, systems, workflow/responsibilities, outcome, availability, media and code.
- `src/components/Internationalization/I18n.js`: existing translations.
- `src/Image/`: local images. `src/Image/case-studies/` holds the new authentic captures. Projects without an image use a title cover.
- `src/components/Skills/SkillIcon.jsx`: bundled icons for the skill labels; no external image hosting is needed.

Give every project a unique, stable `slug`; add its expanded content under the same key in `caseStudies.js`. Define explicit `engines`, `years` and `languages` arrays using confirmed metadata; unknown values remain empty. The four recent projects have no confirmed calendar year, and Straw and Feathers' engine/languages are still unconfirmed. See [Project discovery filters](../docs/project-filters.md) for stable IDs, the complete mapping and date-provenance cautions. Use `github` only for verified public source repositories. Use `website` and an optional `websiteLabelKey` for product sites, files or team showcases. Set `playableUrl` only for a verified public playable or download destination. Omit unavailable links and unknown dates. Add a `whatIDidKey` for confirmed personal contributions.

Gallery items support `image`, `video` and click-to-load `embed` media with localized `alt`/`caption`, optional `poster`, and optional credit. Import local images into the data file. Images can be enlarged; videos use controls and do not autoplay. Code items use localized `title`/`description`, a language label, the exact source text and source file/revision attribution. Public source URLs are optional and must be accessible. The renderer hides sections without content and lets visitors expand code excerpts on demand.

See [Project case-study pages](../docs/project-case-studies.md) for complete data examples, route/filter behavior, media guidance, source SHAs and excerpt line ranges, and screenshot capture URLs. Three real source excerpts and two public ARCHIVERIF screenshots are included. Gameplay media and verified playable links for the three new games remain unavailable; their pages do not invent those assets.

Contact delivery uses the existing EmailJS service in `Contact.js`. A successful build and mocked tests do not verify live delivery or the service's allowed origins.

See [the portfolio review](../docs/portfolio-review.md) for remaining content gaps, verification history and recommended improvements.

# Mohaned Bouzaidi — Portfolio

Bilingual React portfolio for games, prototypes and software projects. Visitors see all work immediately and can combine Games/Software filters with University, Cégep or Independent context.

## Run locally

From the repository root:

```powershell
cd responsiveportfolio
npm ci
npm start
```

Open http://localhost:3000. The app uses the existing Create React App toolchain.

## Verify

```powershell
npm test -- --watchAll=false --runInBand
npm run build
```

The tests cover project discovery, translated search, combined filters, empty results, modal focus/closing, and contact validation/sending states. Email transport is mocked in tests; no test email is sent.

## Update content

- `src/data/projectUpdates.js`: recent project records and their English/French copy.
- `src/data/const.js`: previous projects, skills, education and experience records.
- `src/components/Internationalization/I18n.js`: existing translations.
- `src/Image/`: local images. Projects without an image use a title cover.
- `src/components/Skills/SkillIcon.jsx`: bundled icons for the skill labels; no external image hosting is needed.

Use `github` only for public source repositories. Use `website` and an optional `websiteLabelKey` for product sites, files or team showcases. Omit unavailable links and unknown dates. Add a `whatIDidKey` for verified personal contributions.

Contact delivery uses the existing EmailJS service in `Contact.js`. A successful build and mocked tests do not verify live delivery or the service's allowed origins.

See [the portfolio review](../docs/portfolio-review.md) for project sources, remaining content gaps and recommended improvements.

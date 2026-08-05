# Crafting for Exiles Website

Landing and support site for `craftforexiles.app`, the iOS companion app for
planning PoE2-style crafts before spending in-game currency.

## Included Pages

- `/` landing page
- `/support` support/contact page
- `/privacy` privacy policy
- `/TOS` terms of service

## Local Development

```bash
npm install
npm run dev
```

The local preview runs at `http://localhost:3000/`.

## Validation

```bash
npm run build
npm run test
```

The build exports a static site to `out/`. The tests verify that the homepage
and required support/legal pages render and that starter preview code has been
removed.

## Hosting

This repo is configured for GitHub Pages. Pushes to `main` run the Pages
workflow in `.github/workflows/pages.yml` and publish the exported `out/`
folder. The custom domain is set by `public/CNAME`.

## Notes Before Launch

- Replace the placeholder App Store link when the listing is live.
- Replace `support@rudeus.io` if you choose a different support inbox.
- Add real app screenshots when they are ready.
- Review the Privacy Policy and Terms of Service before App Review submission.
- Keep the non-affiliation disclaimer visible on public pages.

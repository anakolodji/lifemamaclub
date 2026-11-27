# Life Mama Club — site

Marketing site for the Life Mama Club, built with Next.js (App Router) and Tailwind CSS.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint + Prettier check
npm run format     # apply Prettier (also sorts Tailwind classes)
npm run typecheck
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_PARTNER_FORM_ENDPOINT` to the URL that
should receive partner applications. While it is empty, the partner form shows a "not configured"
message instead of sending.

## Routes

| Route                   | Page                                    |
| ----------------------- | --------------------------------------- |
| `/`                     | Club landing page                       |
| `/candidatura`          | Membership application                  |
| `/confirmacao`          | Application received                    |
| `/parcerias`            | Partnerships landing page               |
| `/candidatura-empresas` | Partner (brand) application, multi-step |

The old URLs keep working: `/index.html`, `/parcerias.html` and `/candidatura-empresas.html`
redirect to the routes above, and `/#/candidatura`-style links are redirected on load.

## Structure

- `src/app/(club)` and `src/app/(partners)` are two route groups with their own root layout and
  stylesheet, because the two sites use different base styles and fonts. Moving between them is a
  full page load; within each group navigation is client-side.
- `src/styles/tailwind.css` holds the shared Tailwind setup: the brand palette, a 4px spacing step
  and the original breakpoints as custom variants (`lte900:`, `lte820:`, `tablet:`, …). Preflight is
  deliberately not loaded, since the design relies on the browser's default element styles.
- `src/components/club`, `src/components/partners` and `src/components/shared` hold the page
  sections and interactive pieces (carousels, accordions, forms, mobile menu).
- Images live in `public/assets` and are served through `next/image`.

# MB PUB

Website for MB PUB, a visual communication and advertising agency in Oran, Algeria.

## Development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
npm run lint   # Check ESLint rules
npm run build  # Create a production build
npm run start  # Run the production build
```

## Configuration

Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, and `NEXT_PUBLIC_GTM_ID` in `.env.local` and in the deployment environment. The site URL is used for canonical metadata, JSON-LD, `sitemap.xml`, and `robots.txt`. Use your Google Analytics 4 Measurement ID (`G-...`) and Google Tag Manager container ID (`GTM-...`) for the analytics variables.

## Analytics

The site uses Vercel Web Analytics and Google Tag Manager. The existing `<Analytics />` component records page views, and `AnalyticsTracker` records safe interaction events for links and buttons without sending form contents or query strings.

Tracked custom events include:

- `interaction`: link or button type, safe destination, label, and page path.
- `contact_request_prepared`: form source, selected service, and whether optional fields were filled.
- `generate_lead`: contact form submitted (GA4 recommended conversion event).
- `phone_click` / `whatsapp_click`: a `tel:` or `wa.me` link was clicked, with the page path.
- `project_click`: a portfolio project was opened. Includes `project_id`, `category`, and `location` (`home` or `service_page`; service pages also send `service`).
- `portfolio_filter`: a category filter on the home portfolio, with `category`.
- `project_service_click`: the service badge on a project in `/realisations`, with `project_id` and `service`.
- `pwa_install_available`: the browser considers the site installable (once per session).
- `pwa_installed`: the visitor installed the app.
- `pwa_launch`: the site was opened as the installed app (once per session). `source` is `app` or `shortcut`.

Events go to Vercel Analytics, to GA4 through `gtag` when `NEXT_PUBLIC_GA_ID` is set, and to the GTM `dataLayer` as `{ event: "<name>", ...properties }` when `NEXT_PUBLIC_GTM_ID` is set. In GTM, create a **Custom Event** trigger with the event name to use them.

To add a named event to any link or button, including in Server Components, use data attributes: `data-track-event="name"` plus `data-track-<prop>="value"`. For example, `data-track-project-id="zizou"` is sent as `project_id`.

Enable Web Analytics for the Vercel project after deployment to view these events in the Vercel dashboard. Analytics may be blocked by browser extensions or privacy settings.

Google Analytics 4 is loaded only when `NEXT_PUBLIC_GA_ID` is configured. It records page views, route changes, interactions, and contact-request conversion events. Google Tag Manager loads only when `NEXT_PUBLIC_GTM_ID` is configured. Add both variables to the production deployment settings. If you configure the same GA4 property in GTM, disable the direct GA4 tag or its duplicate page view and event reporting to avoid counting events twice. Verify traffic in Google Analytics under **Reports** and **Realtime**.

## Content and images

- Service and portfolio content lives in `lib/data.ts` and `lib/services-data.ts`.
- Service images live in `public/services`.
- Portfolio images live in `public/portfolio`.
- Contact forms prepare a WhatsApp message for `+213 553 924 419`.

## Deployment

Build locally with `npm run build`, then deploy the project to Vercel or another Next.js-compatible host. Configure `NEXT_PUBLIC_SITE_URL` with the public domain before deployment.

## Images

Portfolio projects are defined once in `lib/portfolio.ts` and used on the home page, `/realisations` and each service page (via each project's `services` slugs).

To add a project photo:

1. Put the full-size original in `assets/originals/portfolio/` (git-ignored).
2. Run `node scripts/optimize-images.mjs`. It writes a web-sized copy (max 1600px, EXIF/GPS removed) to `public/portfolio/`, and regenerates the PWA icons and `og-image.jpg`.
3. Add an entry to `lib/portfolio.ts` with the output `width` and `height` printed by the script.

## PWA

The site is installable as a Progressive Web App:

- `app/manifest.ts`: name, icons (including maskable), shortcuts.
- `public/sw.js`: service worker. It caches visited pages and images and shows `/offline` when a page is opened without a connection. Bump `VERSION` in it to clear old caches.
- `components/ServiceWorkerRegister.tsx`: registers the worker in production builds only.

Test with `npm run build && npm run start`, then use Chrome DevTools → **Application** (Manifest / Service workers) and **Lighthouse**. Installing requires HTTPS, which Vercel provides.

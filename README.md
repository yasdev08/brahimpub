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

Enable Web Analytics for the Vercel project after deployment to view these events in the Vercel dashboard. Analytics may be blocked by browser extensions or privacy settings.

Google Analytics 4 is loaded only when `NEXT_PUBLIC_GA_ID` is configured. It records page views, route changes, interactions, and contact-request conversion events. Google Tag Manager loads only when `NEXT_PUBLIC_GTM_ID` is configured. Add both variables to the production deployment settings. If you configure the same GA4 property in GTM, disable the direct GA4 tag or its duplicate page view and event reporting to avoid counting events twice. Verify traffic in Google Analytics under **Reports** and **Realtime**.

## Content and images

- Service and portfolio content lives in `lib/data.ts` and `lib/services-data.ts`.
- Service images live in `public/services`.
- Portfolio images live in `public/portfolio`.
- Contact forms prepare a WhatsApp message for `+213 553 924 419`.

## Deployment

Build locally with `npm run build`, then deploy the project to Vercel or another Next.js-compatible host. Configure `NEXT_PUBLIC_SITE_URL` with the public domain before deployment.

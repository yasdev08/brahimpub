import { track as trackVercel } from "@vercel/analytics";

type AnalyticsProperties = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, properties?: AnalyticsProperties) {
  trackVercel(name, properties);

  if (typeof window !== "undefined") {
    // Direct GA4 tag (NEXT_PUBLIC_GA_ID)
    window.gtag?.("event", name, properties);

    // Google Tag Manager (NEXT_PUBLIC_GTM_ID): GTM triggers listen for
    // `{ event: ... }` objects in the dataLayer, which gtag() does not push.
    if (process.env.NEXT_PUBLIC_GTM_ID) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...properties });
    }
  }
}

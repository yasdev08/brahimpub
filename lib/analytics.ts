import { track as trackVercel } from "@vercel/analytics";

type AnalyticsProperties = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, properties?: AnalyticsProperties) {
  trackVercel(name, properties);

  if (typeof window !== "undefined") {
    window.gtag?.("event", name, properties);
  }
}

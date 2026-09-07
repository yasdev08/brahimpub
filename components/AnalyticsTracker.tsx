"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getSafeTarget(element: HTMLAnchorElement | HTMLButtonElement) {
  const href = element instanceof HTMLAnchorElement ? element.href : "";
  let destination = "";

  if (href) {
    try {
      const url = new URL(href);
      destination = `${url.origin}${url.pathname}`;
    } catch {
      destination = "";
    }
  }

  return {
    type: element instanceof HTMLAnchorElement ? "link" : "button",
    name:
      element.dataset.track ||
      element.getAttribute("aria-label") ||
      element.textContent?.replace(/\s+/g, " ").trim().slice(0, 80) ||
      "unknown",
    destination,
    page: window.location.pathname,
  };
}

export default function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest("a, button");
      if (!(interactive instanceof HTMLAnchorElement || interactive instanceof HTMLButtonElement)) {
        return;
      }

      trackEvent("interaction", getSafeTarget(interactive));
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

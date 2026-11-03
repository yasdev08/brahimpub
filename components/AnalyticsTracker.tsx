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

// Named events from markup, usable in Server Components:
//   <Link data-track-event="project_click" data-track-project-id="zizou" ...>
// sends `project_click` with { project_id: "zizou", page: "/..." }.
function getDeclaredEvent(element: HTMLElement) {
  const name = element.dataset.trackEvent;
  if (!name) return null;

  const properties: Record<string, string> = { page: window.location.pathname };
  for (const [key, value] of Object.entries(element.dataset)) {
    if (!key.startsWith("track") || key === "track" || key === "trackEvent") continue;
    if (value === undefined) continue;
    const prop = key
      .slice("track".length)
      .replace(/^[A-Z]/, (c) => c.toLowerCase())
      .replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
    properties[prop] = value.slice(0, 100);
  }
  return { name, properties };
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

      const declared = getDeclaredEvent(interactive);
      if (declared) trackEvent(declared.name, declared.properties);

      if (interactive instanceof HTMLAnchorElement) {
        const url = new URL(interactive.href, window.location.href);

        if (url.protocol === "tel:") {
          trackEvent("phone_click", { page: window.location.pathname });
        } else if (url.hostname === "wa.me") {
          trackEvent("whatsapp_click", { page: window.location.pathname });
        }
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

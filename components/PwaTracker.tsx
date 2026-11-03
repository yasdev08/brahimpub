"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function oncePerSession(key: string) {
  try {
    if (sessionStorage.getItem(key)) return false;
    sessionStorage.setItem(key, "1");
  } catch {
    // Storage blocked (private mode etc.): still report.
  }
  return true;
}

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // iOS Safari home-screen apps
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

// Reports PWA usage:
// - pwa_launch: the site was opened as the installed app (once per session)
// - pwa_install_available: the browser considers the site installable
// - pwa_installed: the user installed the app
export default function PwaTracker() {
  useEffect(() => {
    if (isStandalone() && oncePerSession("mbpub:pwa_launch")) {
      const source = new URLSearchParams(window.location.search).get("source");
      trackEvent("pwa_launch", {
        // set by start_url / shortcuts in app/manifest.ts
        source: source === "pwa-shortcut" ? "shortcut" : "app",
        page: window.location.pathname,
      });
    }

    const onInstallAvailable = () => {
      if (oncePerSession("mbpub:pwa_install_available")) {
        trackEvent("pwa_install_available", { page: window.location.pathname });
      }
    };
    const onInstalled = () => {
      trackEvent("pwa_installed", { page: window.location.pathname });
    };

    window.addEventListener("beforeinstallprompt", onInstallAvailable);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onInstallAvailable);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  return null;
}

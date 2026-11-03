/* MB PUB service worker
 *
 * - Pages: network-first, falling back to the last cached copy, then /offline.
 * - /_next/static: cache-first (file names are content-hashed).
 * - Images: stale-while-revalidate, capped in size.
 *
 * Bump VERSION to drop all old caches on the next deploy.
 */
const VERSION = "v1";
const PAGES = `mbpub-pages-${VERSION}`;
const STATIC = `mbpub-static-${VERSION}`;
const IMAGES = `mbpub-images-${VERSION}`;
const OFFLINE_URL = "/offline";
const MAX_PAGES = 30;
const MAX_IMAGES = 80;

const PRECACHE = [
  OFFLINE_URL,
  "/logo1.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const pages = await caches.open(PAGES);
      await pages.addAll(PRECACHE);

      // Also cache the CSS/JS the offline page needs so it renders styled.
      const res = await pages.match(OFFLINE_URL);
      if (res) {
        const html = await res.clone().text();
        const assets = [
          ...new Set(
            [...html.matchAll(/(?:href|src)="(\/_next\/static\/[^"]+)"/g)].map(
              (m) => m[1]
            )
          ),
        ];
        const statics = await caches.open(STATIC);
        await Promise.allSettled(assets.map((a) => statics.add(a)));
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([PAGES, STATIC, IMAGES]);
      for (const key of await caches.keys()) {
        if (key.startsWith("mbpub-") && !keep.has(key)) await caches.delete(key);
      }
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      await self.clients.claim();
    })()
  );
});

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}

async function handleNavigation(event) {
  const cache = await caches.open(PAGES);
  try {
    const preload = await event.preloadResponse;
    const response = preload || (await fetch(event.request));
    if (response.ok && response.type === "basic") {
      // Strip the query string so ?source=pwa etc. share one entry.
      const url = new URL(event.request.url);
      cache.put(url.origin + url.pathname, response.clone());
      trim(PAGES, MAX_PAGES);
    }
    return response;
  } catch {
    const url = new URL(event.request.url);
    return (
      (await cache.match(url.origin + url.pathname)) ||
      (await cache.match(OFFLINE_URL)) ||
      Response.error()
    );
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(STATIC);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(event) {
  const cache = await caches.open(IMAGES);
  const cached = await cache.match(event.request);
  const network = fetch(event.request)
    .then((response) => {
      if (response.ok) {
        cache.put(event.request, response.clone());
        trim(IMAGES, MAX_IMAGES);
      }
      return response;
    })
    .catch(() => cached || Response.error());
  if (cached) {
    event.waitUntil(network);
    return cached;
  }
  return network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
    return;
  }

  // React Server Component payloads for client navigations: leave to Next.js.
  if (request.headers.get("RSC") || url.searchParams.has("_rsc")) return;

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (
    url.pathname.startsWith("/_next/image") ||
    /\.(?:png|jpe?g|webp|avif|svg|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(staleWhileRevalidate(event));
  }
});

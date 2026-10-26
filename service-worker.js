
/* OzAir v0.32.18 Pilot Test - PWA service worker
   Handles URL query parameters and offline navigation.
   No changes to flight planning calculations or layouts.
*/

const CACHE = 'ozair-v03218-pwa-public-test-1';

const SHELL = [
  './',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('ozair-') && key !== CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Do not intercept external weather or PDF library requests.
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);

    // Treat navigation to /, /index.html, or either with
    // query parameters as the same cached application.
    if (request.mode === 'navigate') {
      try {
        const response = await fetch(request);
        if (response.ok) return response;
      } catch (error) {
        // Network unavailable: serve the cached application.
      }

      const offlinePage = await cache.match('./');
      if (offlinePage) return offlinePage;

      return Response.error();
    }

    // Ignore query parameters when looking up local assets.
    const cached = await cache.match(request, {
      ignoreSearch: true
    });

    if (cached) return cached;

    try {
      const response = await fetch(request);

      if (response.ok) {
        await cache.put(request, response.clone());
      }

      return response;
    } catch (error) {
      return Response.error();
    }
  })());
});

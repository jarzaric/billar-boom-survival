const CACHE_NAME = 'billar-boom-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' // Asegúrate de que el nombre coincida con tu imagen
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
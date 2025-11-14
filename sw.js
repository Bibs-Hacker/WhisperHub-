const CACHE_NAME = 'whisperbox-v3';
const urlsToCache = [
  '/',
  '/manifest.json',
  'https://files.catbox.moe/d5zlzh.jpg',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Exo+2:wght@400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

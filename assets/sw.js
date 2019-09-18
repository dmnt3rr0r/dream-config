const filesToCache = [
];

const staticCacheName = 'dream-cache-{{ VERSION }}';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
}

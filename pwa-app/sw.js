'use strict';
importScripts('/sw-toolbox.js'); 
toolbox.precache(['index.html','css/bulma.min.css','css/style.css', 'js/app.js']); 
toolbox.router.get('/images/*', toolbox.cacheFirst); 
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});



/*self.addEventListener('fetch', (event) => {
  event.respondWith(new Response('You are not going anywhere!'));
}); 

self.addEventListener('install', (event) => {
  if (!('caches' in self)) return;
  event.waitUntil(
    caches.open('version1').then((cache) => {
      return cache.addAll(
        [
          '/index.html',
          '/css/style.css',
          '/js/app.js',
          '/images/1.jpg',
        ]
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});
*/
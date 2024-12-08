self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('flask-pwa-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/static/img.png',
          '/index.html',           // Add your HTML files
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
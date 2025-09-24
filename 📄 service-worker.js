self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("girasoles").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/1.png",
        "/2.png",
        "/3.png",
        "/icon-192.png",
        "/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1")
  await cache.addAll(resources)
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/app.js",
    ]),
  )
})

self.addEventListener("fetch", (event) => {
  console.log(event.request.url)
  event.respondWith((async () => {
    const responseFromCache = await caches.match(event.request)
    if (responseFromCache) {
      return responseFromCache
    }
    return await fetch(event.request)
  })())
})
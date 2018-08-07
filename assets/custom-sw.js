importScripts('./vendor/localforage.js')
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp('/.*'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/css?family=Pacifico|Source+Sans+Pro'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
  workbox.strategies.staleWhileRevalidate()
)

const graphqlUrlExp = new RegExp('https://api-useast.graphcms.com/v1/cjjrx6gq20az001eyg6z6zdfz/*')

self.addEventListener('fetch', function (event) {
  if (event.request && graphqlUrlExp.test(event.request.url) && event.request.method === 'POST') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          let res = response.clone()
          localforage.setItem('testkey', res.json())
            .catch((error) => {
              console.error('failed to store post response')
              console.error(error)
            })
          return response
        })
        .catch((error) => {
          console.error(error)
        }
    )
  }
})

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox'
//   const options = {
//     body: event.data.text()
//   }
//   event.waitUntil(self.registration.showNotification(title, options))
// })

workbox.precaching.precacheAndRoute([])

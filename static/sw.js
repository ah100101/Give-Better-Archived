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
        .catch(() => {
          console.log('some bad shit happened')
          return localforage.getItem('testkey', value => value)
        })
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

workbox.precaching.precacheAndRoute([
  {
    "url": "apollo-module.js",
    "revision": "fd6bee63b1cdf16eba47cf35790fd35f"
  },
  {
    "url": "App.js",
    "revision": "168a3207b0c0f1686585ea26924278df"
  },
  {
    "url": "client.js",
    "revision": "7bc99d3f06702a9110d766145283fd80"
  },
  {
    "url": "components/no-ssr.js",
    "revision": "a775ce7200a68c41e24d59d95d58e334"
  },
  {
    "url": "components/nuxt-child.js",
    "revision": "b8d4d90554625e3194c6a423d92c68ed"
  },
  {
    "url": "components/nuxt-link.js",
    "revision": "aff107e6a695ceae1fd1a0e3fd99dacb"
  },
  {
    "url": "components/nuxt.js",
    "revision": "80f71ce3df1f11aebcf884929047239a"
  },
  {
    "url": "empty.js",
    "revision": "0b975041be133e77125d7d42d81e3e1c"
  },
  {
    "url": "index.js",
    "revision": "ba34e4c33c51280923744b8f5bcdef99"
  },
  {
    "url": "loading.html",
    "revision": "9ffe5581801714f3b7aad37fad364010"
  },
  {
    "url": "middleware.js",
    "revision": "2a35b295e7da3bffd0644e0671972af6"
  },
  {
    "url": "router.js",
    "revision": "af26bf946e96760eee18919e5c719fef"
  },
  {
    "url": "server.js",
    "revision": "73fb06348a491d9ca7340095218ea862"
  },
  {
    "url": "store.js",
    "revision": "58387b0919380e501f50e86adf0c2f36"
  },
  {
    "url": "utils.js",
    "revision": "e0410636dfb70c2277bcf63190a53dd1"
  },
  {
    "url": "views/app.template.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "views/error.html",
    "revision": "b5028b6e894f46721ccb0fa580857e5e"
  }
])

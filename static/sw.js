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

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox'
//   const options = {
//     body: event.data.text()
//   }
//   event.waitUntil(self.registration.showNotification(title, options))
// })

workbox.precaching.precacheAndRoute([
  {
    "url": "App.js",
    "revision": "168a3207b0c0f1686585ea26924278df"
  },
  {
    "url": "client.js",
    "revision": "5b66208875b5557f7b7195b6fa0afeb9"
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
    "url": "dist/app.6cd39340287a410dc43d.js",
    "revision": "353c240554ae5b90d3c6dbe74992b9bd"
  },
  {
    "url": "dist/app.c2cb614e2e42cc10ae8f0bcb30367095.css",
    "revision": "c2cb614e2e42cc10ae8f0bcb30367095"
  },
  {
    "url": "dist/index.spa.html",
    "revision": "753bbb51928fbe1eb59fbd425513b42f"
  },
  {
    "url": "dist/index.ssr.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "dist/layouts_default.429246ab62e82e6b8d02.js",
    "revision": "95c5352bf72f5fe342f9e55478cdcc0e"
  },
  {
    "url": "dist/manifest.34e1b515a937e084f7ed.js",
    "revision": "ae76d17e4079fe9d8c36e10843270766"
  },
  {
    "url": "dist/pages_account.d31fd830bb41d9f67fb3.js",
    "revision": "c902edbaac91a6f06d4e7c277fcdb9c5"
  },
  {
    "url": "dist/pages_add.32697c7fcedb4355a0e3.js",
    "revision": "a768cd4b8d6f29133b1d4c254d708d22"
  },
  {
    "url": "dist/pages_change-password.7f0a297974d27b326e0f.js",
    "revision": "bc0da23abf2d7e3c14aa2d484ee5fa9f"
  },
  {
    "url": "dist/pages_feed.9673539dc4c26ac19d03.js",
    "revision": "b2506e92f77694b9c7b086339cc64d21"
  },
  {
    "url": "dist/pages_forgot-password.db3850aae5b2a804141d.js",
    "revision": "8198343991728359fc877266dd5e8610"
  },
  {
    "url": "dist/pages_friends.1407b150f77a8971a2ce.js",
    "revision": "400005818da8fea3a96c29f3f42454de"
  },
  {
    "url": "dist/pages_index.bc9a991a2f885965958d.js",
    "revision": "707e68a1d902ba23305fc9cd5a7d6c40"
  },
  {
    "url": "dist/pages_login.0135a9bffb0e22e363fc.js",
    "revision": "76e97bc4f049aa4a45186b5d1feb3d0a"
  },
  {
    "url": "dist/pages_post.994dc0ea4e6fddc11a83.js",
    "revision": "c985af4d22df7e7cc6c125988e19bab6"
  },
  {
    "url": "dist/pages_search.a7ac9b97c78f17e24cd1.js",
    "revision": "fc10575f824ca22b23ca9285b94e925a"
  },
  {
    "url": "dist/pages_sign-up.317546c3961f04217d58.js",
    "revision": "a4022b138c6f4641fb240b36c6cb2e4e"
  },
  {
    "url": "dist/pages_user__id.1e64c3d5c0a8da370a84.js",
    "revision": "de243735ea6f955a56b50396d4bd603d"
  },
  {
    "url": "dist/vendor.c6696fb9f7f83562a954.js",
    "revision": "355c2bf1a06772a2d8c252ec823d1819"
  },
  {
    "url": "empty.js",
    "revision": "0b975041be133e77125d7d42d81e3e1c"
  },
  {
    "url": "index.js",
    "revision": "7ba16493c18fbf3a30438eb3ae8b0c47"
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
    "revision": "124be7974c1eee46d7d81277a0e5aa8e"
  },
  {
    "url": "store.js",
    "revision": "58387b0919380e501f50e86adf0c2f36"
  },
  {
    "url": "utils.js",
    "revision": "17cb400669290453ba1c2ad8038b6ec2"
  },
  {
    "url": "views/app.template.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "views/error.html",
    "revision": "57cceec04c48a85d442105e00ccff251"
  }
])

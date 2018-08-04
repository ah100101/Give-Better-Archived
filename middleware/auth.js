export default function ({store, app}) {
  const defaultClient = app.apolloProvider.defaultClient
  const link = defaultClient.link
  console.log({link})
  // defaultClient.networkInterface.use([{
  //   applyMiddleware (req, next) {
  //     if (!req.options.headers) {
  //       req.options.headers = {}
  //     }
  //     // const token = store.state && store.state.authToken
  //     req.options.headers.Authorization = `Bearer fuckrightoff`
  //     next()
  //   }
  // }])
}

export default function ({store}) {
  if (!store.getters['user/user']) {
    store.$router.push({ path: '/login' })
  }
}

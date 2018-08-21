export default {
  middleware: 'authenticated',
  beforeMount: function () {
    let state = this
    // this should be requesting from vuex
    this.$firevueauth.getUser()
      .then(user => {
        if (!user) {
          state.$router.push({
            path: '/login'
          })
        }
      })
      .catch(error => {
        console.error(error)
        state.$router.push({
          path: '/login'
        })
      })
  },
  mounted: function () {
    this.setNavigation()
  },
  methods: {
    setNavigation: function () {
      this.$store.dispatch('navigation/setNavigation', 'authenticated')
    }
  }
}

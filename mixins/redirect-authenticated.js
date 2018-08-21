export default {
  mounted: function () {
    let state = this
    this.$firevueauth.getUser()
      .then(user => {
        if (user) {
          state.$router.push({
            path: '/feed'
          })
        }
      })
      .catch(console.error)
  },
  methods: {

  }
}

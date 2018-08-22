export default {
  layout: 'default',
  mounted: function () {
    this.setNavigation()
  },
  methods: {
    setNavigation: function () {
      this.$store.dispatch('navigation/setNavigation', 'unauthenticated')
    }
  }
}

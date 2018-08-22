export default {
  layout: 'authenticated',
  mounted: function () {
    this.setNavigation()
  },
  methods: {
    setNavigation: function () {
      this.$store.dispatch('navigation/setNavigation', 'authenticated')
    }
  }
}

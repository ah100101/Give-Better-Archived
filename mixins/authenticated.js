export default {
  layout: 'authenticated',
  mounted: function () {
    this.setNavigation()
  },
  data () {
    return {
      // currentUser: this.$store.getters['user/user']
    }
  },
  methods: {
    setNavigation: function () {
      this.$store.dispatch('navigation/setNavigation', 'authenticated')
    }
  }
}

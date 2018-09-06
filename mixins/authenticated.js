export default {
  layout: 'authenticated',
  mounted: function () {
    this.setNavigation()
  },
  data () {
    return {

    }
  },
  computed: {
    user: function () {
      return this.$store.getters['user/user']
    }
  },
  methods: {
    setNavigation: function () {
      this.$store.dispatch('navigation/setNavigation', 'authenticated')
      this.$store.dispatch('navigation/showSignOut')
    }
  }
}

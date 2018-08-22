<template lang='pug'>
  div(v-cloak)
    div(v-if='!loading')
      topnav
      nuxt
    div(v-else)
      | Loading
</template>

<script>
import topnav from '~/components/navigation/TopNav.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  layout: 'login',
  data: () => {
    return {
      loading: true
    }
  },
  props: [
    
  ],
  mounted: function() {
    let state = this
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        state.$store.dispatch('user/setUser', {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        })
        state.$store.dispatch('user/setUserLocal', false)
        state.$router.push({
          path: '/feed'
        })
      } else {
        state.$store.dispatch('user/setUserLocal', undefined)
        state.loading = false
      }
    })
  },
  components: {
    topnav
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

html {
  font-family: "Source Sans Pro";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
  
body {
  background-color: $light-shade;
}
</style>

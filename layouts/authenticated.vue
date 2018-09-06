<template lang='pug'>
  div(v-cloak)
    div(v-if='!loading')
      topnav
      nuxt
    loadingscreen(v-else)
</template>

<script>
import topnav from '~/components/navigation/TopNav.vue'
import loadingscreen from '~/components/layout/LoadingScreen.vue'
import userMixin from '~/mixins/user.js'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  middleware: 'authenticated',
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
        const appUser = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid        
        }

        state.$store.dispatch('user/setUser', appUser)
        state.$store.dispatch('user/setUserLocal', false)
        
        state.loading = false
        
        state.setUser(appUser)
      } else {
        state.$router.push({
          path: '/login'
        })
      }
    })
  },
  components: {
    topnav,
    loadingscreen
  },
  mixins: [
    userMixin
  ],
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

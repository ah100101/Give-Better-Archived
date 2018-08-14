<template lang='pug'>
section.container
  nav.panel.login-form
    p.panel-heading Login
    .panel-block.is-active
      label Username
      .control
        input.input(type="text" placeholder="")
    .panel-block
      label Password
      .control
        input.input(type="password" placeholder="")
    .panel-block
      button.button.is-primary.is-outlined.is-fullwidth(
        v-on:click='login'
      ) Login
    .panel-block.transparent
      nuxt-link.button.is-small.is-info(to='/forgot-password') Forgot?

</template>

<script>
import unauthenticatedMixin from '~/mixins/unauthenticated.js'
import firebase from 'firebase/app'
import auth from 'firebase/auth'

let db = firebase.firestore()

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mounted: function () {
    // Using a redirect.
    firebase.auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token.
          var token = result.credential.accessToken;
          console.log('token: ')
          console.log({token})
        }
        var user = result.user;
        console.log('user: ')
        console.log({user})
    });
  },
  methods: {
    login: function () {
        // var provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('profile');
        // provider.addScope('email');
        // firebase.auth().signInWithPopup(provider)
        //   .then(function (result) {
        //     let token = result.credential.accessToken
        //     let user = result.user
        //     console.log('token: ')
        //     console.log({token})
        //     console.log('user: ')
        //     console.log({user})
        //   })

        // Start a sign in process for an unauthenticated user.
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithRedirect(provider);
    }
  },
  mixins: [
    unauthenticatedMixin
  ]
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $family-serif;
}

.login-form {
  background: white;
}

.transparent {
  border: 0px;
  background-color: $light-shade;
}

label {
  margin-right: .5rem;
}

</style>

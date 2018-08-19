<template lang='pug'>
section.container
  nav.panel.login-form
    p.panel-heading Sign In
    .panel-block.login-buttons
      p
        button.google(
          v-on:click='googleLogin()'
        ) 
          img(src='~/assets/images/btn_google_light_normal_ios.svg')
          | Sign in with Google
      p
        button.facebook(
          v-on:click='facebookLogin()'
        )
          img(src='~/assets/images/btn_fb_normal.svg')
          | Log in with Facebook
</template>

<script>
import unauthenticatedMixin from '~/mixins/unauthenticated.js'
import localforage from 'localforage'
import firebase from 'firebase/app'
import auth from 'firebase/auth'

export default {
  asyncData (context) {
    return 
    { 
      localUser: undefined
    }
  },
  mounted: function () {
    this.handleAuthRedirect()

    console.log('current user:')
    this.$firevueauth.getUser()
      .then(user => {
        console.log(user)
      })
      .catch(console.error)
  },
  methods: {
    googleLogin: function () {
      var googleProvider = new firebase.auth.GoogleAuthProvider()
      googleProvider.addScope('profile')
      googleProvider.addScope('email')

      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          firebase.auth().signInWithRedirect(googleProvider)
        })
        .catch(console.error)
    },
    facebookLogin: function () {
      var googleProvider = new firebase.auth.FacebookAuthProvider()
      googleProvider.addScope('profile')
      googleProvider.addScope('email')

      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          firebase.auth().signInWithRedirect(googleProvider)
        })
        .catch(console.error)
    },
    handleAuthRedirect: function () {
      firebase
        .auth()
        .getRedirectResult()
        .then(function(result) {
          if (!result || !result.credential || !result.user) {
            console.debug('Invalid redirect')
            return
          }
          // user is valid, do something
        })
        .catch(console.error)
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

.login-buttons {
  display: block;

  p {
    margin-bottom: .5rem;
  }
}

.google {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  
  background-color: white;
  color: #363636;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  -webkit-appearance: none;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  justify-content: flex-start;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  padding-left: 0px;
  padding-right: .5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  img {
    height: 2.5rem;
  }
}

.facebook {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  
  background-color: #4267b2;
  color: white;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  justify-content: flex-start;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  padding-left: 0px;
  padding-right: 1rem;
  padding-top: .3rem;
  padding-bottom: .3rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  img {
    height: 2rem;
    padding: .3rem;
  }
}

.twitter {
  background-color: #1da1f2;
  color: white;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  justify-content: flex-start;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  padding-left: 0px;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  img {
    height: 2.5rem;
  }
}

</style>

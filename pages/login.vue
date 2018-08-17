<template lang='pug'>
section.container
  nav.panel.login-form
    p.panel-heading Sign In
    .panel-block.login-buttons
      p
        button.google(
          v-on:click='login'
        ) 
          img(src='~/assets/images/btn_google_light_normal_ios.svg')
          | Sign in with Google
      p
        button.facebook(
          v-on:click='facebook'
        )
          img(src='~/assets/images/btn_fb_normal.svg')
          | Log in With Facebook
      p
        button.twitter(
          v-on:click='facebook'
        )
          img(src='~/assets/images/Twitter_Logo_WhiteOnBlue.svg')
          | Sign in with Twitter

</template>

<script>
import unauthenticatedMixin from '~/mixins/unauthenticated.js'
import firebase from 'firebase/app'
import auth from 'firebase/auth'

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mounted: function () {

  },
  methods: {
    login: function () {

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

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
      button.google(
        v-on:click='login'
      ) 
        img(src='~/assets/images/btn_google_light_normal_ios.svg')
        | Sign in with Google
    .panel-block.transparent
      nuxt-link.button.is-small.is-info(to='/forgot-password') Forgot?

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

  img {
    height: 2rem;
  }
}

</style>

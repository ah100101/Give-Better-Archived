<template lang='pug'>
section.container.post
  .columns.is-centered
    .column
      .post-form
        .field
          label.label Gift Url
          .control
            input.input.is-success(type="text" placeholder="" v-model="url")
        .field
          label.label Description
          .control
            textarea.textarea(placeholder="" v-model="description")
        .field.is-grouped
          .control.submit
            button.button.is-primary(v-on:click='submitIdea') List Gift Idea
  
</template>  

<script>
import authenticatedMixin from '~/mixins/authenticated.js'
import ideaMixin from '~/mixins/idea.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  data () {
    return { 
      url: '',
      description: ''
    }
  },
  mounted: function () {

  },
  mixins: [
    authenticatedMixin,
    ideaMixin
  ],
  methods: {
    submitIdea: function () {
      this.createIdea(this.user.uid, { url: this.url, description: this.description})
      .then(console.debug)
      .catch(console.error)
    }
  },
  components: {
    
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.post {
  min-height: 100vh;
  display: flex;
  font-family: $family-serif;

  .columns {
    margin: 0;
    width: 100%;
  }

  .column {
    padding: 1rem;
  }

  .post-form {
    margin-top: 3.25rem;
    font-weight: initial;
  }

  .submit {
    width: 100%;

    .button {
      width: inherit;
    }
  }
}

</style>

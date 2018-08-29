<template lang='pug'>
section.container.post
  .columns.is-centered
    .column
      .post-form
        .field
          label.label Gift Url
          .control
            input.input.is-success(type="text" placeholder="")
        .field
          label.label Message
          .control
            textarea.textarea(placeholder="")
        .field.is-grouped
          .control.submit
            button.button.is-primary(v-on:click='submit') List Gift Idea
  
</template>  

<script>
import authenticatedMixin from '~/mixins/authenticated.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
console.log(db)

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mounted: function () {

  },
  mixins: [
    authenticatedMixin
  ],
  methods: {
    submit: function() {
      // db.doc('ideas/' + this.user.uid + 'test0').set({
      //   name: 'test0',
      //   description: 'description0'
      // })
      // .then((result) => {
      //   console.debug('success!')
      //   console.debug(result)
      // })
      // .catch(console.error)
      let ref = db.doc('users/' + this.user.uid).collection('ideas').add({name:'test'})
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

<template lang='pug'>
  section.container
    applogo
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import unauthenticatedMixin from '~/mixins/unauthenticated.js'
import firebase from 'firebase/app'

let db = firebase.firestore()

export default {
  components: {
    applogo: AppLogo
  },
  mixins: [
    unauthenticatedMixin
  ],
  mounted: function () {
    db.collection('messages').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

</style>

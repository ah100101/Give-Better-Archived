import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  mounted: function () {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    createIdea: function (uid, idea) {
      return db
        .doc('users/' + uid)
        .collection('ideas')
        .add(idea)
        .then(result => {
          return result
        })
        .catch(console.error)
    }
  }
}

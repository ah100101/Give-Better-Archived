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
      if (!uid) {
        throw new Error('Invalid User ID provided')
      }

      if (!idea) {
        throw new Error('Idea undefined')
      }

      if (!idea.url || !idea.description) {
        throw new Error('Invalid idea properties')
      }

      idea.timestamp = new Date()

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

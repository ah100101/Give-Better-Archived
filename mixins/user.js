import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  methods: {
    setUser: function (user) {
      return db
        .doc('users/' + user.uid)
        .set(user)
        .then(result => {
          return result
        })
        .catch(console.error)
    }
  }
}

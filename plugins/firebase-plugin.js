import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
}

const firebasePlugin = {
  install: (Vue, options) => {
    if (firebaseConfig &&
      firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.databaseURL &&
      firebaseConfig.projectId &&
      firebaseConfig.storageBucket &&
      firebaseConfig.messagingSenderId) {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
      }
    } else {
      console.error('Invalid firebase config provided')
    }
  }
}

Vue.use(firebasePlugin)

import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import localforage from 'localforage'
import { resolve } from 'path'

const key = 'firevueauth-user'

const firebaseAuthPlugin = {
  install: (Vue, options) => {
    Vue.prototype.$firevueauth = {
      deleteUser: () => localforage.removeItem(key).catch(console.error),
      liveUser: undefined,
      localUser: () => localforage.getItem(key).catch(console.error),
      getUser: () => {
        let state = this
        return new Promise((resolve, reject) => {
          if (state.liveUser) {
            resolve(state.liveUser)
          }

          localforage
            .getItem(key)
            .then(value => {
              if (value) {
                resolve(JSON.parse(value))
              }
              reject(new Error('A user is not available.'))
            })
            .catch((error) => {
              reject(error)
            })
        })
      }
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Vue.prototype.$firevueauth.liveUser = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        }

        localforage
          .setItem(key, JSON.stringify(user))
          .catch(console.error)
      } else {
        Vue.prototype.$firevueauth.liveUser = undefined
      }
    })
  }
}

Vue.use(firebaseAuthPlugin)

import firebase from 'firebase/app'
import auth from 'firebase/auth'

export const state = () => ({
  user: {},
  userLocal: false
})

export const getters = {
  user: state => {
    return state.user
  },
  userLocal: state => {
    return state.userLocal
  }
}

export const actions = {
  setUser (context, user) {
    context.commit('setUser', user)
  },
  setUserLocal (context, local) {
    context.commit('setUserLocal', local)
  },
  signOut (context) {
    firebase
      .auth()
      .signOut()
      .then(console.debug)
      .catch(console.error)

    context.commit('setUser', undefined)
    context.commit('setUserLocal', undefined)
  }
}

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setUserLocal (state, local) {
    state.userLocal = local
  }
}

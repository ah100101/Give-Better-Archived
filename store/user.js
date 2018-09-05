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

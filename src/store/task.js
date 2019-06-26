export default {
  state: {
    tasks: [
      {
        'id': 1,
        'title': 'GrowthBusters: Hooked on Growth',
        'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.',
        'whatWatch': 'Film',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Game of the Trones',
        'description': 'Best serial',
        'whatWatch': 'Serial',
        'completed': false,
        'editing': false
      }
    ]
  },
  mutations: {
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask ({commit}, payload) {
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    }
  }
}

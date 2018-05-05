import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },

  mutations: {
    increment(state) {
      state.count += 2;
    },
  },

  actions: {
    asyncIncrement({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment');
          resolve();
        });
      });
    },
  },
});

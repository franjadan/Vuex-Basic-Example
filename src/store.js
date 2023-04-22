import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    }
  },
  getters: {
    getTasksByDuration(state) {
      const filteredTask = [...state.tasks];
      return filteredTask.sort((a, b) => {
        if (a.duration < b.duration) {
          return -1;
        }

        if (a.duration > b.duration) {
          return 1;
        }

        return 0;
      });
    }
  }
});

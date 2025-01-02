import { userService } from "@/services/user.service";

export const users = {
  namespaced: true,
  state: {
    all: {},
  },
  actions: {
    getAll({ commit }) {
      commit("getAllRequest");

      userService.getUser().then(
        (users) => commit("getSuccess", users),
        (error) => commit("getFailed", error)
      );
    },
  },
  mutations: {
    getAllRequest(state) {
      state.all = { loading: true };
    },
    getSuccess(state, user) {
      state.all = { items: user };
    },
    getFailed(state, error) {
      state.all = { error };
    },
  },
};

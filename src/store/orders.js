import { orderService } from "@/services/order.service";

export const orders = {
  namespaced: true,
  state: {
    all: {},
    search: {},
  },
  actions: {
    getAll({ commit }) {
      commit("getAllRequest");

      orderService.getAll().then(
        (orders) => commit("getSuccess", orders),
        (error) => commit("getFailed", error)
      );
    },
    index({ commit }, search) {
      orderService.getAll(search).then(
        (orders) => commit("setSearchRequest", orders),
        (error) => commit("getFailed", error)
      );
    },
    store({ commit }, order) {
      orderService.store(order).then(
        (orders) => commit("setSearchRequest", orders),
        (error) => commit("getFailed", error)
      );
    },
  },
  mutations: {
    getAllRequest(state) {
      state.all = { loading: true };
    },
    setSearchRequest(state, search) {
      state.search = { items: search };
    },
    getSuccess(state, orders) {
      state.all = { items: orders };
    },
    getFailed(state, error) {
      state.all = { error };
    },
  },
};

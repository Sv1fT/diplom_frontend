import { citiesService } from "@/services/cities.service";

export const cities = {
  namespaced: true,
  state: {
    citiesFrom: [],
    citiesTo: [],
    all: [],
  },
  actions: {
    getCitiesFrom({ commit }, query) {
      citiesService.getAllCities(query).then(
        (cities) => commit("getCitiesFrom", cities),
        (error) => commit("getFailed", error)
      );
    },
    getCitiesTo({ commit }, query) {
      citiesService.getAllCities(query).then(
        (cities) => commit("getCitiesTo", cities),
        (error) => commit("getFailed", error)
      );
    },
    getAllCities({ commit }) {
      citiesService.getAllCities().then(
        (cities) => commit("getCitiesTo", cities),
        (error) => commit("getFailed", error)
      );
    },
  },
  mutations: {
    getCitiesFrom(state, cities) {
      state.citiesFrom = cities;
    },
    getCitiesTo(state, cities) {
      state.citiesTo = cities;
    },
    getCitiesAll(state, cities) {
      state.all = cities;
    },
    getFailed(state, error) {
      state.all = { error };
    },
  },
};

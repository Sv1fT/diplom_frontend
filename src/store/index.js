import Vuex from "vuex";
import { alert } from "./alert";
import { auth } from "./auth";
import { users } from "./users";
import { orders } from "@/store/orders";
import { cities } from "@/store/cities";
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    alert,
    auth,
    users,
    orders,
    cities,
  },
});

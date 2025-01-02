import axios from "../axios";
import store from "@/store";

function getAllOrders(search) {
  return axios()
    .get("/orders", {
      params: search,
    })
    .then(handleResponse);
}
function storeOrder(order) {
  return axios()
    .post("/orders", order, {
      headers: { Authorization: `Bearer ${store.state.auth.user.token}` },
    })
    .then(handleResponse);
}

export const orderApi = {
  getAllOrders,
  storeOrder,
};

function handleResponse(response) {
  if (response.status === 200) {
    return response.data.data;
  }
}

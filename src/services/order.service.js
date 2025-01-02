import { orderApi } from "@/const/api/order.api";

export const orderService = {
  getAll,
  store,
};

function getAll(search) {
  return orderApi.getAllOrders(search);
}

function store(order) {
  return orderApi.storeOrder(order);
}

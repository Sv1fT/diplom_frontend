<script setup>
import Filter from "@/components/Order/Filter.vue";
import Card from "@/components/Order/Card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => {
  store.dispatch("orders/getAll");
});

const orders = computed(() => {
  return store.state.orders.search;
});

console.log(orders);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-8">
        <Card
          v-for="order in orders.items"
          v-bind:key="order.id"
          :order="order"
        ></Card>
      </div>
    </div>
    <Filter></Filter>
  </div>
</template>

<style scoped></style>

<template>
  <div class="card m-3 rounded-4">
    <span class="card-header align-content-center">
      <img
        class="avatar avatar-96 float-start rounded-3 me-3 mt-2"
        src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
        alt=""
      />
      <span class="row">
        <span class="text-start col-10">
          <p class="fw-bold fs-5">{{ order.user.name }}</p>
          <p><i class="bi bi-star-fill fs-4"></i> 5.0</p>
        </span>
        <span
          class="col-2 align-content-center fs-3 bg-primary rounded-4 text-white"
        >
          14$
        </span>
      </span>
    </span>
    <div class="row m-auto mt-3">
      <div class="col-6 d-flex text-start">
        <div class="row">
          <span class="ms-3 col-12">
            {{ order.datetime_from }} {{ order.city_from.name }}
          </span>
          <span class="ms-3 col-12">
            {{ order.datetime_to }} {{ order.city_to.name }}
          </span>
        </div>
      </div>
      <div class="col-6 text-start">
        <p>{{ order.datetime_from }}</p>
        <p>{{ order.weight }} Kgs</p>
        <p>{{ order.order_number }} Kgs</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["order"]);
const order = computed(() => {
  return props.order;
});
</script>

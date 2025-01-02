<template>
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div class="card border border-light-subtle rounded-3 shadow-sm">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                Создание заказа
              </h2>
              <form action="#!">
                <div class="row gy-2 overflow-hidden">
                  <div class="col-12">
                    <v-select
                      class="form-control"
                      @search="searchFrom"
                      v-model="order.city_from"
                      :options="optionsFrom"
                      :filterable="false"
                    >
                      <template v-slot:no-options>
                        Введите город отправки
                      </template>
                      <template v-slot:option="option">
                        <div class="m-auto">
                          {{ option.label }}
                        </div>
                        <small class="text-muted">{{ option.region }}</small>
                      </template>
                    </v-select>
                  </div>
                  <div class="col-12">
                    <v-select
                      class="form-control"
                      @search="searchTo"
                      v-model="order.city_to"
                      :options="optionsTo"
                      :filterable="false"
                    >
                      <template v-slot:no-options>
                        Введите город отправки
                      </template>
                      <template v-slot:option="option">
                        <div class="m-auto">
                          {{ option.label }}
                        </div>
                        <small class="text-muted">{{ option.region }}</small>
                      </template>
                    </v-select>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="datetime-local"
                        class="form-control"
                        name="date"
                        id="date"
                        placeholder=""
                        required
                        v-model="order.date_from"
                      />
                      <label for="email" class="form-label"
                        >Дата отправления</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="datetime-local"
                        class="form-control"
                        name="date"
                        id="date"
                        placeholder=""
                        required
                        v-model="order.date_to"
                      />
                      <label for="email" class="form-label"
                        >Дата прибытия</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        class="form-control"
                        name="weight"
                        id="weight"
                        value=""
                        placeholder="Вес"
                        required
                        v-model="order.weight"
                      />
                      <label for="password" class="form-label"
                        >Общий вес который возьму в Кг</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        class="form-control"
                        name="weight"
                        id="weight"
                        value=""
                        placeholder="Вес"
                        required
                        v-model="order.price"
                      />
                      <label for="password" class="form-label">Цена</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="d-grid my-3">
                      <button
                        class="btn btn-primary btn-lg"
                        type="submit"
                        @click.prevent="createOrder"
                      >
                        Создать
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { debounce } from "@/utils/debounce.utils";
import router from "@/router";
import moment from "moment/moment";
const store = useStore();

const order = ref({
  date_to: moment("2024-11-18 18:30").format("YYYY-MM-DD HH:mm"),
  date_from: moment("2024-11-16 18:30").format("YYYY-MM-DD HH:mm"),
  city_to: null,
  city_from: null,
  price: 1500,
  weight: 10,
});

const searchFrom = (query, loading) => {
  if (query.length) {
    loading(true);
    orderCityFromDebounce(query, loading);
  }
};
const searchTo = (query, loading) => {
  if (query.length) {
    loading(true);
    orderCityToDebounce(query, loading);
  }
};

const orderCityFromDebounce = debounce((query, loading) => {
  store.dispatch("cities/getCitiesFrom", query);
  loading(false);
}, 500);
const orderCityToDebounce = debounce((query, loading) => {
  store.dispatch("cities/getCitiesTo", query);
  loading(false);
}, 500);

const optionsTo = computed(() => {
  return store.state.cities.citiesTo;
});
const optionsFrom = computed(() => {
  return store.state.cities.citiesFrom;
});

const createOrder = () => {
  store.dispatch("orders/store", order.value);

  router.push({ name: "orders", search: store.state.orders.search });
};
</script>

<template>
  <div class="d-flex">
    <form class="m-auto">
      <div class="input-group mb-3 mt-5">
        <div class="flex flex-col gap-1">
          <AutoComplete
            v-model="search.from_city_id"
            :suggestions="optionsFrom"
            @complete="searchFrom"
          />
        </div>
        <v-select
          class="form-control"
          @search="searchFrom"
          v-model="search.from_city_id"
          :options="optionsFrom"
          :filterable="false"
        >
          <template v-slot:no-options> Введите город отправки </template>
          <template v-slot:option="option">
            <div class="m-auto">
              {{ option.label }}
            </div>
            <small class="text-muted">{{ option.region }}</small>
          </template>
        </v-select>
        <v-select
          v-model="search.to_city_id"
          @search="searchTo"
          class="form-control"
          :options="optionsTo"
          :filterable="false"
        >
          <template v-slot:no-options> Введите город назначения </template>
          <template v-slot:option="option">
            <div class="m-auto">
              {{ option.label }}
            </div>
            <small class="text-muted">{{ option.region }}</small>
          </template>
        </v-select>
        <input
          type="date"
          class="form-control"
          placeholder="Дата"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          v-model="search.datetime_from"
        />
        <input
          type="date"
          class="form-control"
          placeholder="Дата"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          v-model="search.datetime_to"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Вес"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          v-model="search.weight"
        />
        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon1"
          @click.prevent="searchHandle"
        >
          Поиск
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import moment from "moment";
import { useStore } from "vuex";
import router from "@/router";

const store = useStore();

const search = ref({
  from_city_id: ref({}),
  to_city_id: ref({}),
  datetime_from: moment("1980-11-03").format("YYYY-MM-DD"),
  datetime_to: moment().add(2, "day").format("YYYY-MM-DD"),
  weight: "100",
});

const searchFrom = (query, loading) => {
  console.log(query);
  if (query.length) {
    loading(true);
    searchFromDebounce(query, loading);
  }
};
const searchTo = (query, loading) => {
  if (query.length) {
    loading(true);
    searchToDebounce(query, loading);
  }
};

const searchFromDebounce = debounce((query, loading) => {
  store.dispatch("cities/getCitiesFrom", query);
  loading(false);
}, 500);
const searchToDebounce = debounce((query, loading) => {
  store.dispatch("cities/getCitiesTo", query);
  loading(false);
}, 500);

const optionsTo = computed(() => {
  return store.state.cities.citiesTo;
});
const optionsFrom = computed(() => {
  return store.state.cities.citiesFrom;
});

const searchHandle = () => {
  store.dispatch("orders/index", search.value);

  router.push({ name: "orders", search: store.state.orders.search });
};

function debounce(fn, ms) {
  let timeout;
  return function (...args) {
    timeout && clearTimeout(timeout);
    // @ts-expect-error: ignore
    timeout = setTimeout(() => fn.apply(this, args), ms);
  };
}

// this.$store.dispatch("cities/getCitiesTo", query);
</script>

<template>
  <div class="container text-start">
    <Search></Search>
    <div class="d-flex">
      <div class="col-4 m-2">
        <i class="bi bi-search fw-bold fs-1"></i>
        <h3>Search, click, find and go!</h3>
        <span>
          Send luggages a ride has never been easier! Thanks to our simple
          website powered by great technology, you can Chose trust person for
          send you luggages.
        </span>
      </div>
      <div class="col-4 m-2">
        <i class="bi bi-shield-shaded fw-bold fs-1"></i>
        <h3>Trust who you send with</h3>
        <span>
          We take the time to get to know each of our members partners. We check
          reviews, profiles and IDs, so you know who you’re sending with, can
          send your luggages at ease with trust persons .
        </span>
      </div>
      <div class="col-4 m-2">
        <i class="bi bi-currency-exchange fw-bold fs-1"></i>
        <h3>No Comition for platform</h3>
        <span>
          No matter where you’re sending , Russia, UAE, Türkiye, find the
          perfect ride from our wide range of destinations and without benefits.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Search from "@/components/Search.vue";

export default {
  name: "HomeView",
  components: { Search },
};
</script>

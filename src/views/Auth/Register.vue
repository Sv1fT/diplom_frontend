<template>
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div class="card border border-light-subtle rounded-3 shadow-sm">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                Регистрация аккаунта
              </h2>
              <form action="#!">
                <div class="row gy-2 overflow-hidden">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="user.name"
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                      />
                      <label for="email" class="form-label">Имя</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="user.email"
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                      />
                      <label for="email" class="form-label">Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        value=""
                        placeholder="Password"
                        required
                      />
                      <label for="password" class="form-label">Пароль</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="user.password_confirmation"
                        type="password"
                        class="form-control"
                        name="confirmation_password"
                        id="confirmation_password"
                        value=""
                        placeholder="Подтверждение пароля"
                        required
                      />
                      <label for="password" class="form-label"
                        >Подтверждение пароля</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid my-3">
                      <button
                        @click.prevent="register"
                        class="btn btn-primary btn-lg"
                        type="submit"
                      >
                        Регистрация
                      </button>
                    </div>
                  </div>
                  <div class="col-12">
                    <p class="m-0 text-secondary text-center">
                      Уже есть аккаунт?
                      <RouterLink
                        to="/login"
                        class="link-primary text-decoration-none"
                        >Войти</RouterLink
                      >
                    </p>
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
import { ref } from "vue";
import * as api from "../../const/api";
import router from "@/router";
const user = ref({
  email: null,
  name: null,
  password: null,
  password_confirmation: null,
});

async function register() {
  const registered = await api.register(user.value);
  if (registered) {
    router.push("login");
  }
}
</script>

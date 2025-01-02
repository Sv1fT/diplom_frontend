<template>
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div class="card border border-light-subtle rounded-3 shadow-sm">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <h2 class="fs-6 fw-normal text-center text-secondary mb-4">
                Вход в ваш аккаунт
              </h2>
              <form action="#!">
                <div class="row gy-2 overflow-hidden">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="userLogin.email"
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
                        v-model="userLogin.password"
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
                    <div class="d-flex gap-2 justify-content-between">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          name="rememberMe"
                          id="rememberMe"
                        />
                        <label
                          class="form-check-label text-secondary"
                          for="rememberMe"
                        >
                          Запомнить меня
                        </label>
                      </div>
                      <a href="#!" class="link-primary text-decoration-none"
                        >Забыли пароль?</a
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid my-3">
                      <button
                        @click.prevent="handleSubmit"
                        class="btn btn-primary btn-lg"
                        type="submit"
                      >
                        Войти
                      </button>
                    </div>
                  </div>
                  <div class="col-12">
                    <p class="m-0 text-secondary text-center">
                      Еще не аккаунта?
                      <RouterLink
                        to="/register"
                        class="link-primary text-decoration-none"
                        >Зарегистрироваться</RouterLink
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
import { reactive, onMounted } from "vue";
import { useStore } from "vuex";

// eslint-disable-next-line vue/no-export-in-script-setup

const userLogin = reactive({
  email: null,
  password: null,
  submitted: false,
});

const store = useStore();

onMounted(() => {
  store.dispatch("auth/logout");
});

const handleSubmit = () => {
  const { dispatch } = store;
  const { email, password } = userLogin;
  if (email && password) {
    dispatch("auth/login", { email, password });
  }
};
</script>

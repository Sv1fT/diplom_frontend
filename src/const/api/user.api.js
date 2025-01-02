import axios from "../axios";

function login(email, password) {
  return axios()
    .post("/login", {
      email,
      password,
    })
    .then((user) => {
      if (user.data.token) {
        localStorage.setItem("user", JSON.stringify(user.data));
      }

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function register(params) {
  return axios().post("/register", params);
}

function getUser() {
  return axios().get("/user").then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const userApi = {
  login,
  logout,
  register,
  getUser,
};

import { userApi } from "@/const/api/user.api";

export const userService = {
  login,
  logout,
  getUser,
};

function login(email, password) {
  return userApi.login(email, password);
}

function logout() {
  // remove user from local storage to log user out
  return userApi.logout();
}

function getUser() {
  return userApi.getUser();
}

import http from "./httpService";
import jwtDecode from "jwt-decode";
import { setToken, removeToken, getToken } from "./localStorage";
import { toast } from "react-toastify";
import handleServerError from "./handleServerError";
const route = process.env.REACT_APP_Api + "auth/";

export async function login(data) {
  try {
    const response = await http.post(route, data, {
      "content-type": "application/json",
    });
    console.log(response.response);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else {
      setToken(response.data.token);
      return { data: response.data.token, error: null };
    }
  } catch (ex) {
    toast.warn(ex);
  }
}

export function authed() {
  try {
    let token = getToken();
    if (token) {
      let user = jwtDecode(token);
      if (user) {
        return true;
      }
    }
    return false;
  } catch (ex) {
    toast.warn(ex);
  }
}

export function admin() {
  try {
    let token = getToken();
    if (token) {
      let user = jwtDecode(token);
      if (user && user.isAdmin) {
        return true;
      }
    }
    return false;
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function register(user) {
  try {
    const response = await http.post(route, user);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    return { data: "confirmed", error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export function logout() {
  removeToken("x-auth-token");
}

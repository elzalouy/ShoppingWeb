import http from "./httpService";
import { getToken } from "./localStorage";
const route = process.env.REACT_APP_Api + "products/";

export async function getProducts() {
  const token = getToken();
  const result = await http.get(route, { headers: { "x-auth-token": token } });
  return { data: result.data, error: null };
}

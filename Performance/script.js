import http from "k6/http";
import { check } from "k6";
import { userLoginPayload, userItemPayload } from "./payloads.js";

const baseUrl = "https://virtserver.swaggerhub.com/nord-s/User-API/1.0.0";

const testConfig = JSON.parse(open("./options.json"));

export const options = testConfig;

export function postUserLogin() {
  const payload = JSON.stringify(userLoginPayload);
  const res = http.post(baseUrl + "/v1/user/login", payload);
  check(res, { "status was 200": (r) => r.status === 200 });
}

export function getUserItems() {
  const itemsLimit = "10";
  const res = http.get(baseUrl + `/user/items?limit=${itemsLimit}`);
  check(res, { "status was 200": (r) => r.status === 200 });
}

export function getUserItemById() {
  const id = "adb9be68-7cf9-4ab3-9c23-b1e349464c98";
  const res = http.get(baseUrl + `/user/${id}/item`);
  check(res, { "status was 200": (r) => r.status === 200 });
}

export function postUserItem() {
  const payload = JSON.stringify(userItemPayload);
  const res = http.post(baseUrl + "/user/item", payload);
  check(res, { "status was 200": (r) => r.status === 200 });
}

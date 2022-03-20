import { fetch, router } from "dva";

function request(url, options) {
  return fetch(url, options)
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => ({ err }));
}

export default request;

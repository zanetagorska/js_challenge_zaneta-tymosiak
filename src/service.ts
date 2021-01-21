const BASE_URL = "https://api.musement.com/api/v3";

export default {
  getProductList() {
    // TODO will be parametrized soon
    const url = `${BASE_URL}/venues/164/activities?limit=6&offset=0`;
    return fetch(url).then(response => response.json());
  },
};

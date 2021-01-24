export const DEFAULT_LIMIT = 6; 
const BASE_URL = "https://api.musement.com/api/v3";

export default {
  getProductList(offset = 0) {
    const url = `${BASE_URL}/venues/164/activities?limit=${DEFAULT_LIMIT}&offset=${offset}`;
    return fetch(url).then(response => response.json());
  },
};

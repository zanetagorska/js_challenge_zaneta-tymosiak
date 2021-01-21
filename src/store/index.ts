import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [
      {
        id: "d752296e-176f-413c-a61d-0b4931a54be8",
        title: "Tour salta fila per piccoli gruppi ai Musei Vaticani e alla Cappella Sistina",
        coverUrl: "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg",
        city: {
          name: 'Roma',
        },
        retailPrice: {
          formattedValue: "€ 49.90",
          value: 49.9,
        },
        reviewsAvg: 4.2,
        reviewsNumber: 246,
        topSeller: true,
      },
      {
        id: "d752296e-176f-413c-a61d-0b4931a54be1",
        title: "Tour salta fila per piccoli gruppi ai Musei Vaticani e alla Cappella Sistina",
        coverUrl: "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg",
        city: {
          name: 'Roma',
        },
        retailPrice: {
          formattedValue: "€ 49.90",
          value: 49.9,
        },
        reviewsAvg: 4.2,
        reviewsNumber: 246,
        topSeller: true,
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});

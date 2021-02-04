
import Vue from "vue";
import Vuex from "vuex";

import * as wishlist from './wishlist';
import * as productList from './product';
import * as cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wishlist,
    productList,
    cart,
  },
});

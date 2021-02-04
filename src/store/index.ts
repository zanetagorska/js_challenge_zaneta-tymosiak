
import Vue from "vue";
import Vuex from "vuex";
import { ADD_TO_CART, REMOVE_FROM_CART } from "@/types/Mutation.types";
import { addItemToCart, removeItemFromCart } from "@/types/Action.types";
import { cartCount, cartTotalPrice } from "@/types/Getter.types";
import { RootState } from "@/types/State.types";
import { CartItem } from "@/types/Cart.types";

import * as wishlist from './wishlist';
import * as productList from './product';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    wishlist,
    productList,
  },
  state: {
    cart: [] as CartItem[],
  } as RootState,
  mutations: {
    [ADD_TO_CART](state, activeItem) {
      const index = state.cart.findIndex(item => item.product.uuid === activeItem.product.uuid);
      if (index < 0) {
        return state.cart.push(activeItem);
      }
      return state.cart.splice(index, 1, activeItem);
    },
    [REMOVE_FROM_CART](state, productId) {
      state.cart = state.cart.filter(cartItem => cartItem.product.uuid !== productId)
    }
  },
  actions: {
    [addItemToCart]({ commit }, cartItem) {
      commit(ADD_TO_CART, cartItem)
    },
    [removeItemFromCart]({ commit }, productId) {
      commit(REMOVE_FROM_CART, productId)
    },
  },
  getters: {
    [cartCount]: state => state.cart.reduce((total, item) => total + item.count, 0),
    [cartTotalPrice]: state => state.cart.reduce((total, item) => total + item.count * item.product.retailPrice.value, 0),
  },
});

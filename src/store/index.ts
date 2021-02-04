
import Vue from "vue";
import Vuex from "vuex";
import Service, { DEFAULT_LIMIT } from '@/service';
import camelizeKeys from "@/utils/camelizeKeys";
import { ADD_TO_CART, EXPAND_PRODUCT_LIST, REMOVE_FROM_CART, SET_PRODUCT_LIST } from "@/types/Mutation.types";
import { addItemToCart, expandProductList, fetchProductList, removeItemFromCart } from "@/types/Action.types";
import { cartCount, cartTotalPrice, offset } from "@/types/Getter.types";
import { RootState } from "@/types/State.types";
import { ProductType } from "@/types/Product.types";
import { CartItem } from "@/types/Cart.types";
import * as wishlist from './wishlist';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    wishlist,
  },
  state: {
    productList: [] as ProductType[],
    cart: [] as CartItem[],
  } as RootState,
  mutations: {
    [SET_PRODUCT_LIST](state, productList) {
      state.productList = productList;
    },
    [EXPAND_PRODUCT_LIST](state, products) {
      const pl = state.productList;
      pl.push.apply(state.productList, products);
    },
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
    [fetchProductList]({ commit }) {
      Service.getProductList().then(productList => {
        const camelizedProductList = productList.map((product: Record<string, unknown>) => camelizeKeys(product))
        commit(SET_PRODUCT_LIST, camelizedProductList);
      });
    },
    [expandProductList]({ commit }) {
      Service.getProductList(this.getters.offset).then(products => {
        const camelizedProductList = products.map((product: Record<string, unknown>) => camelizeKeys(product))
          commit(EXPAND_PRODUCT_LIST, camelizedProductList);
      });
    },
    [addItemToCart]({ commit }, cartItem) {
      commit(ADD_TO_CART, cartItem)
    },
    [removeItemFromCart]({ commit }, productId) {
      commit(REMOVE_FROM_CART, productId)
    },
  },
  getters: {
    [offset]: state => state.productList.length / DEFAULT_LIMIT,
    [cartCount]: state => state.cart.reduce((total, item) => total + item.count, 0),
    [cartTotalPrice]: state => state.cart.reduce((total, item) => total + item.count * item.product.retailPrice.value, 0),
  },
});


import Vue from "vue";
import Vuex from "vuex";
import Service from '@/service';
import camelizeKeys from "@/utils/camelizeKeys";
import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, SET_PRODUCT_LIST } from "@/types/Mutation.types";
import { addIdToWishlist, addItemToCart, fetchProductList, removeIdFromWishlist, removeItemFromCart } from "@/types/Action.types";
import { ProductType } from "@/types/Product.types";
import { CartItem } from "@/types/Cart.types";
import { cartCount, cartTotalPrice, wishlishCount } from "@/types/Getter.types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [] as ProductType[],
    wishlist: [] as string[],
    cart: [] as CartItem[],
  },
  mutations: {
    [SET_PRODUCT_LIST](state, productList) {
      state.productList = productList;
    },
    [ADD_TO_WISHLIST](state, productId) {
      state.wishlist.push(productId)
    },
    [REMOVE_FROM_WISHLIST](state, productId) {
      state.wishlist = state.wishlist.filter(id => id !== productId)
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
    [addIdToWishlist]({ commit }, productId) {
      commit(ADD_TO_WISHLIST, productId);
    },
    [removeIdFromWishlist]({ commit }, productId) {
      commit(REMOVE_FROM_WISHLIST, productId);
    },
    [addItemToCart]({ commit }, cartItem) {
      commit(ADD_TO_CART, cartItem)
    },
    [removeItemFromCart]({ commit }, productId) {
      commit(REMOVE_FROM_CART, productId)
    },
  },
  getters: {
    [wishlishCount]: state => state.wishlist.length,
    [cartCount]: state => state.cart.reduce((total, item) => total + item.count, 0),
    [cartTotalPrice]: state => state.cart.reduce((total, item) => total + item.count * item.product.retailPrice.value, 0),
  },
});

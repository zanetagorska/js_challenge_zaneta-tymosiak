
import Vue from "vue";
import Vuex from "vuex";
import Service from '@/service';
import camelizeKeys from "@/utils/camelizeKeys";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SET_PRODUCT_LIST } from "@/types/Mutation.types";
import { addIdToWishlist, fetchProductList, removeIdFromWishlist } from "@/types/Action.types";
import { ProductType } from "@/types/Product.types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [] as ProductType[],
    wishlist: [] as string[],
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
    [removeIdFromWishlist]({ commit}, productId) {
      commit(REMOVE_FROM_WISHLIST, productId);
    }
  },
});

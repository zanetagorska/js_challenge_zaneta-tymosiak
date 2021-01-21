import fetchProductList from "@/types/Action.types";
import SET_PRODUCT_LIST from "@/types/Mutation.types";
import Vue from "vue";
import Vuex from "vuex";
import Service from '@/service';
import camelizeKeys from "@/utils/camelizeKeys";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: []
  },
  mutations: {
    [SET_PRODUCT_LIST](state, productList) {
      state.productList = productList;
    },
  },
  actions: {
    [fetchProductList]({ commit }) {
      Service.getProductList().then(productList => {
        const camelizedProductList = productList.map((product: Record<string, unknown>) => camelizeKeys(product))
        commit(SET_PRODUCT_LIST, camelizedProductList);
      });
    },
  },
});

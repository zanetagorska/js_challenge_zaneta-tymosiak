import Service, { DEFAULT_LIMIT } from "@/service";
import { fetchProductList, expandProductList } from "@/types/Action.types";
import { offset } from "@/types/Getter.types";
import { SET_PRODUCT_LIST, EXPAND_PRODUCT_LIST } from "@/types/Mutation.types";
import { Product } from "@/types/Product.types";
import { ProductState, RootState } from "@/types/State.types";
import camelizeKeys from "@/utils/camelizeKeys";
import { ActionContext } from "vuex";

export const state = {
  productList: [] as Product[],
} as ProductState;

export const getters = {
  [offset]: (state: ProductState) => Math.ceil(state.productList.length / DEFAULT_LIMIT),
}

export const mutations = {
  [SET_PRODUCT_LIST](state: ProductState, productList: Product[]) {
    state.productList = productList;
  },
  [EXPAND_PRODUCT_LIST](state: ProductState, products: Product[]) {
    const pl = state.productList;
    pl.push.apply(state.productList, products);
  },
}

export const actions = {
  [fetchProductList]({ commit }: ActionContext<ProductState, RootState>) {
    Service.getProductList().then(productList => {
      const camelizedProductList = productList.map((product: Record<string, unknown>) => camelizeKeys(product))
      commit(SET_PRODUCT_LIST, camelizedProductList);
    });
  },
  [expandProductList]({ commit }: ActionContext<ProductState, RootState>) {
    Service.getProductList(getters.offset(state)).then(products => {
      const camelizedProductList = products.map((product: Record<string, unknown>) => camelizeKeys(product))
        commit(EXPAND_PRODUCT_LIST, camelizedProductList);
    });
  },
}


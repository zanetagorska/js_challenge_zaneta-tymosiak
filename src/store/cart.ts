import { addItemToCart, removeItemFromCart } from "@/types/Action.types";
import { CartItem } from "@/types/Cart.types";
import { cartCount, cartTotalPrice } from "@/types/Getter.types";
import { ADD_TO_CART, REMOVE_FROM_CART } from "@/types/Mutation.types";
import { CartState, RootState } from "@/types/State.types";
import { ActionContext } from "vuex";

export const state = {
  cart: [],
} as CartState;

export const mutations = {
  [ADD_TO_CART](state: CartState, activeItem: CartItem) {
    const index = state.cart.findIndex(item => item.product.uuid === activeItem.product.uuid);
    if (index < 0) {
      return state.cart.push(activeItem);
    }
    return state.cart.splice(index, 1, activeItem);
  },
  [REMOVE_FROM_CART](state: CartState, productId: string) {
    state.cart = state.cart.filter(cartItem => cartItem.product.uuid !== productId)
  }
}

export const actions = {
  [addItemToCart]({ commit }: ActionContext<CartState, RootState>, cartItem: CartItem) {
    commit(ADD_TO_CART, cartItem)
  },
  [removeItemFromCart]({ commit }: ActionContext<CartState, RootState>, productId: string) {
    commit(REMOVE_FROM_CART, productId)
  },
}

export const getters = {
  [cartCount]: (state: CartState) => state.cart.reduce((total, item) => total + item.count, 0),
  [cartTotalPrice]: (state: CartState) => state.cart.reduce((total, item) => total + item.count * item.product.retailPrice.value, 0),
}

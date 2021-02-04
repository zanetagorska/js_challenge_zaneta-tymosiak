import { addIdToWishlist, removeIdFromWishlist } from "@/types/Action.types"
import { wishlishCount } from "@/types/Getter.types"
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "@/types/Mutation.types"
import { RootState, WishlistState } from "@/types/State.types";
import { ActionContext } from 'vuex';

export const state = {
  wishlist: [],
} as WishlistState;

export const mutations = {
  [ADD_TO_WISHLIST](state: WishlistState, productId: string) {
    state.wishlist.push(productId)
  },
  [REMOVE_FROM_WISHLIST](state: WishlistState, productId: string) {
    state.wishlist = state.wishlist.filter(id => id !== productId)
  },
}

export const actions = {
  [addIdToWishlist]({ commit }: ActionContext<WishlistState, RootState>, productId: string) {
    commit(ADD_TO_WISHLIST, productId);
  },
  [removeIdFromWishlist]({ commit }: ActionContext<WishlistState, RootState>, productId: string) {
    commit(REMOVE_FROM_WISHLIST, productId);
  },
}

export const getters = {
  [wishlishCount]: (state: WishlistState) => state.wishlist.length,
}

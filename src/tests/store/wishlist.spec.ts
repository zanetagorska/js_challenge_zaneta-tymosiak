import { getters, mutations } from '@/store/wishlist';
import { WishlistState } from '@/types/State.types';

describe('Wishlist Store', () => {
  describe('Mutations', () => {
    test('Add productId to wishlist', () => {
      const state: WishlistState = { wishlist: ['12'] };
      const productId = '34';

      mutations.ADD_TO_WISHLIST(state, productId);

      expect(state).toEqual({wishlist: ['12', productId]})
    })
    test('Remove productId from wishlist', () => {
      const state: WishlistState = { wishlist: ['22', '124'] };
      const productId = '124';

      mutations.REMOVE_FROM_WISHLIST(state, productId);

      expect(state).toEqual({ wishlist: ['22']})
    })
  })
  describe('Getters', () => {
    test('Whislist count', () => {
      const state: WishlistState = { wishlist: ['22', '124', '999'] };
      
      expect(getters.wishlistCount(state)).toBe(3);
    })
  })
})

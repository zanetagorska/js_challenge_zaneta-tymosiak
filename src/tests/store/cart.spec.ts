import { product1, product2 } from '@/mocks/Product.mock';
import { getters, mutations } from '@/store/cart';
import { CartState } from '@/types/State.types';

describe('Cart Store', () => {
  describe('Mutations', () => {
    test('Add new item to cart', () => {
      const state: CartState = { cart: [{ product: product1, count: 1 }] };

      mutations.ADD_TO_CART(state, { product: product2, count: 1 });

      expect(state).toEqual({cart: [
        { product: product1, count: 1 },
        { product: product2, count: 1 },
      ]})
    })
    test('Change amount for item which exist in cart', () => {
      const state: CartState = { cart: [{ product: product1, count: 1 }] };

      mutations.ADD_TO_CART(state, { product: product1, count: 6 });

      expect(state).toEqual({cart: [
        { product: product1, count: 6 }
      ]})
    })
    test('Remove item from cart', () => {
      const state: CartState = { cart: [{ product: product1, count: 1 }] };

      mutations.REMOVE_FROM_CART(state, product1.uuid);

      expect(state).toEqual({cart: []})
    })
  })
  describe('Getters', () => {
    test('Cart count', () => {
      const state: CartState = { cart: [
        { product: product1, count: 2 },
        { product: product2, count: 4 },
      ]};
      
      expect(getters.cartCount(state)).toBe(6);
    })
    test('Cart total price', () => {
      const state: CartState = { cart: [
        { product: product1, count: 2 },
        { product: product2, count: 4 },
      ]};
      
      expect(getters.cartTotalPrice(state)).toBe(86);
    })
  })
})

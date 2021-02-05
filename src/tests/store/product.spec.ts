import { product0, product1, product2 } from '@/mocks/Product.mock';
import { getters, mutations } from '@/store/product';
import { ProductState } from '@/types/State.types';

describe('Product Store', () => {
  describe('Mutations', () => {
    test('setProductList', () => {
      const state: ProductState = { productList: [] };

      mutations.SET_PRODUCT_LIST(state, [product0, product1]);

      expect(state).toEqual({productList: [
        product0,
        product1,
      ]})
    })
    test('expandProductList', () => {
      const state: ProductState = { productList: [product0] };

      mutations.EXPAND_PRODUCT_LIST(state, [product1, product2]);

      expect(state).toEqual({productList: [
        product0,
        product1,
        product2,
      ]})
    })
  })
  describe('Getters', () => {
    test('Offset based of product count', () => {
      const state: ProductState = { productList: [
        product0, product1, product2, product0, product1, product2
      ]};
      
      expect(getters.offset(state)).toBe(1);
    })
  })
})

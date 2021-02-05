import { mount } from '@vue/test-utils';
import Product from '../../components/Product.vue';
import { product0 } from '../../mocks/Product.mock';

describe('Product', () => {
  test('emit event when remove-product button is clicked', () => {
    const wrapper = mount(Product, {
      propsData: { product: product0 }
    });

    const button = wrapper.find('[data-testId="remove-from-cart-button"]');
    button.trigger('click')

    const emittedEvent = wrapper.emitted('removeFromCart');
    expect(emittedEvent).toHaveLength(1);

    const expectedPayload = product0.uuid;
    expect(wrapper.emitted('removeFromCart')).toEqual([[expectedPayload]]);
  });
  test('emit event when add-product button is clicked', () => {
    const wrapper = mount(Product, {
      propsData: { product: product0 }
    });

    const button = wrapper.find('[data-testId="add-to-cart-button"]');
    button.trigger('click')

    const emittedEvent = wrapper.emitted('addToCart');
    expect(emittedEvent).toHaveLength(1);
  });
  test('emit event when toggle wishlist-button is clicked', () => {
    const wrapper = mount(Product, {
      propsData: { product: product0 }
    });

    wrapper.setData({ isOnWishlist: false })

    const button = wrapper.find('[data-testId="toggle-wishlist-button"]');
    button.trigger('click')

    const emittedEvent = wrapper.emitted('addToWishlist');
    expect(emittedEvent).toHaveLength(1);
  });
});
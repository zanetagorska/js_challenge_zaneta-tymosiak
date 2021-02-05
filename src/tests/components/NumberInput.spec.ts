import { mount } from '@vue/test-utils';
import NumberInput from '../../components/NumberInput.vue';

describe('NumberInput', () => {
  test('emits event when decrement-button is clicked', () => {
    const wrapper = mount(NumberInput, {
      propsData: { count: 10,}
    });

    const button = wrapper.find('[data-testId="decrement-button"]');
    button.trigger('click')

    const emittedEvent = wrapper.emitted('onDecrement');
    expect(emittedEvent).toHaveLength(1);
  });
  test('emits event when increment-button is clicked', () => {
    const wrapper = mount(NumberInput, {
      propsData: { count: 10,}
    });

    const button = wrapper.find('[data-testId="increment-button"]');
    button.trigger('click')

    const emittedEvent = wrapper.emitted('onIncrement');
    expect(emittedEvent).toHaveLength(1);
  })
});
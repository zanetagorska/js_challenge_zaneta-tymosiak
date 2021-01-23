import { mount } from '@vue/test-utils';
import CounterIcon from '../../components/CounterIcon.vue';

describe('CounterIcon', () => {
  test('Count is visible for values bigger than 0', () => {
    const wrapper = mount(CounterIcon, {
      propsData: { name: 'plus', count: 10 }
    });
  
    expect(wrapper.find('[data-testid="count"]').isVisible()).toBe(true);
  })

  test('Count is not visible for value equal 0', () => {
    const wrapper = mount(CounterIcon, {
      propsData: { name: 'plus', count: 0 }
    });

    expect(wrapper.find('[data-testid="count"]').isVisible()).toBe(false);
  })
})
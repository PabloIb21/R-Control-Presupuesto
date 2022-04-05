import React from 'react';
import { mount } from 'enzyme';
import Error from '../../components/Error';

describe('<Error />', () => {
  test('mount', () => {
    const wrapper = mount(<Error mensaje="Testing..." />);
    expect(wrapper.find('.error').text()).toBe('Testing...');
  });
});
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('AppPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('the application should be displayed after defining the budget', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: '1000' } });
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.contenido-principal').exists()).toBe(true);
  });
});
import React from 'react';
import { mount } from 'enzyme';
import Pregunta from '../../components/Pregunta';

describe('<Pregunta />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Pregunta
        guardarPresupuesto={() => {}}
        guardarRestante={() => {}}
        actualizarPregunta={() => {}}
      />
    );
  });

  test('mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display error when the form is sent empty or with a negative number', () => {
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('.error').exists()).toBe(true);
    expect(wrapper.find('.error').text()).toBe('El presupuesto es incorrecto');
  });

  test('should display no error when the form is sent correctly', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: '1000' } });
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('.error').exists()).toBe(false);
  });
});
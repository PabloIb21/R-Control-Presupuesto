import React from 'react';
import { mount } from 'enzyme';
import Formulario from '../../components/Formulario';

describe('<Formulario />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Formulario
        guardarGasto={() => {}}
        guardarCrearGasto={() => {}}
      />
    );
  });

  test('mount', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display error when the form is sent empty', () => {
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('.error').exists()).toBe(true);
    expect(wrapper.find('.error').text()).toBe('Ambos campos son obligatorios o presupuesto incorrecto');
  });

  test('should display no error when the form is sent correctly', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'Transporte' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: '300' } });
    wrapper.find('form').simulate('submit');

    expect(wrapper.find('.error').exists()).toBe(false);
  });
});
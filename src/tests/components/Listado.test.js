import React from 'react';
import { mount } from 'enzyme';
import Listado from '../../components/Listado';

describe('<Listado />', () => {
  test('mount', () => {
    const gastos = [
      {
        id: 1,
        nombre: 'Transporte',
        cantidad: 300
      },
      {
        id: 2,
        nombre: 'Comida',
        cantidad: 200
      }
    ];

    const wrapper = mount(
      <Listado gastos={gastos} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
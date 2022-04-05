import { mount } from 'enzyme';
import React from 'react';
import Gasto from '../../components/Gasto';

describe('<Gasto />', () => {
  test('mount', () => {
    const gasto = {
      nombre: 'Transporte',
      cantidad: 300
    };

    const wrapper = mount(
      <Gasto gasto={gasto} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
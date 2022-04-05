import React from 'react';
import { shallow } from 'enzyme';
import ControlPresupuesto from '../../components/ControlPresupuesto';

describe('<ControlPresupuesto />', () => {
  test('mount', () => {
    const wrapper = shallow(
      <ControlPresupuesto presupuesto={1000} restante={200} />
    );
  
    expect(wrapper).toMatchSnapshot();
  });
});
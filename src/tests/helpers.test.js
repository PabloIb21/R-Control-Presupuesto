import { revisarPresupuesto } from '../helpers';

describe('Helper revisarPresupuesto', () => {
  test('should return classes alert alert-danger', () => {
    expect(revisarPresupuesto(1000, 200)).toBe('alert alert-danger');
  });

  test('should return classes alert alert-warning', () => {
    expect(revisarPresupuesto(1000, 400)).toBe('alert alert-warning');
  });

  test('should return classes alert alert-success', () => {
    expect(revisarPresupuesto(1000, 600)).toBe('alert alert-success');
  });
});
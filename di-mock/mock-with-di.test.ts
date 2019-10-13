import { ComplexMath } from './ComplexMath';

describe('ComplexMath:DI', () => {
  test('should return result based on sum mock', () => {
    const mockSum = { divide: jest.fn(), sum: jest.fn(() => 8) };
    const complexMath = new ComplexMath(mockSum);

    expect(complexMath.avg(1, 1)).toEqual(4); // sum is mocked

    expect(mockSum.sum).toBeCalledTimes(1);
  });
});

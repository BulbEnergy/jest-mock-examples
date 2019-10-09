import { BasicMath } from './BasicMath';
import { ComplexMath } from './ComplexMath';

jest.mock('./BasicMath'); // mock full class
const MockedBasicMath = BasicMath as jest.MockedClass<typeof BasicMath>;

describe('ComplexMath:class full mock', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    MockedBasicMath.mockClear();
  });

  // implementation detail test
  test('should check the constructor has been called', () => {
    new ComplexMath();

    expect(BasicMath).toBeCalledTimes(1);
  });

  test('check that sum is called but no implementation is done', () => {
    const complexMath = new ComplexMath();

    const result = complexMath.avg(4, 2);

    // get the mocked instance
    const mockInstance = MockedBasicMath.mock.instances[0];

    expect(mockInstance.sum).toBeCalledWith(4, 2);

    // because sum is mocked but not implemented
    expect(result).toBe(NaN);
  });

  test('check that sum is called and sum returns a value', () => {
    const complexMath = new ComplexMath();

    // get the mocked instance
    const mockInstance = MockedBasicMath.mock.instances[0];

    (mockInstance.sum as jest.Mock).mockImplementation(() => 8);

    const result = complexMath.avg(4, 2);

    expect(mockInstance.sum).toBeCalledWith(4, 2);

    expect(result).toBe(4);
  });
});

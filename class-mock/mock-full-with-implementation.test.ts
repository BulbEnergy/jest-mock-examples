import { ComplexMath } from './ComplexMath';

// The docs say this variable needs to be called "mock..."
// If you get "ReferenceError: ... is not defined" you can use "var" instead of "const"
const mockSum = jest.fn(() => 8);

// Can't be arrow function if tsconfig target > es5: BasicMath_1.BasicMath is not a constructor
// jest.mock('./BasicMath', () => ({
//   BasicMath: () => ({ sum: mockSum }),
// }));

jest.mock('./BasicMath', () => ({
  BasicMath: function() {
    return { sum: mockSum };
  },
}));

describe('ComplexMath:class full mock with implementation', () => {
  test('should return result based on sum mock', () => {
    const complexMath = new ComplexMath();

    expect(complexMath.avg(1, 1)).toEqual(4); // sum is mocked

    expect(mockSum).toBeCalledTimes(1);
  });
});

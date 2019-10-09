import { ComplexMath } from './ComplexMath';

// According to docs this needs to be named like "mock..." but works anyways
const fakeSum = jest.fn(() => 8);

// Can't be arrow function if tsconfig target > es5: BasicMath_1.BasicMath is not a constructor
// jest.mock('./BasicMath', () => ({
//   BasicMath: () => ({ sum: fakeSum }),
// }));

jest.mock('./BasicMath', () => ({
  BasicMath: function() {
    return { sum: fakeSum };
  },
}));

describe('ComplexMath:class full mock with implementation', () => {
  test('should return result based on sum mock', () => {
    const complexMath = new ComplexMath();

    expect(complexMath.avg(1, 1)).toEqual(4); // sum is mocked

    expect(fakeSum).toBeCalledTimes(1);
  });
});

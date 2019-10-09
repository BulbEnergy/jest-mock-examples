import * as complexMath from './complexMath';
import * as basicMath from './basicMath';

jest.mock('./basicMath', () => ({
  sum: () => 8,
}));

describe('complexMath:replace module with custom implementation', () => {
  test('should return mocked value and sum is not a mock', () => {
    const result = complexMath.avg(4, 2);

    // error: received value must be a mock or spy function
    // expect(basicMath.sum).toBeCalledWith(4, 2);

    expect(result).toBe(4);
  });
});

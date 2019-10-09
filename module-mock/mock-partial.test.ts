import * as complexMath from './complexMath';
import * as basicMath from './basicMath';

describe('complexMath:module partial mock', () => {
  test('should return real value and spy the call', () => {
    jest.spyOn(basicMath, 'sum');

    const result = complexMath.avg(4, 2);

    // basicMath.sum tracks calls but it's still executed
    expect(basicMath.sum).toBeCalledWith(4, 2);

    expect(result).toBe(3);
  });

  test('should return mocked value and spy the call', () => {
    // sum is mocked now
    jest.spyOn(basicMath, 'sum').mockImplementation(() => 8);

    const result = complexMath.avg(4, 2);

    expect(basicMath.sum).toBeCalledWith(4, 2);

    // sum returns 8, it doesn't matter we pass 4 and 2
    expect(result).toBe(4);

    // error: fails with "value must be a mock or spy function"
    // expect(basicMath.divide).toBeCalledWith(4, 2);
  });
});

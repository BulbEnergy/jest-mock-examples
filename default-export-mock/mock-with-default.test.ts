import * as complexMath from './complexMath';
import sum from './basicMath';

jest.mock('./basicMath'); // mocks all functions in basicMath

const sumMock = sum as jest.MockedFunction<typeof sum>;

describe('complexMath:module full mock', () => {
  beforeEach(() => {
    sumMock.mockReset();
  });

  test('mock sum without return value', () => {
    const result = complexMath.avg(4, 2);

    expect(sumMock).toBeCalledWith(4, 2);

    // because sum is mocked but not implemented
    expect(result).toBe(NaN);
  });

  test('mock sum with return value', () => {
    sumMock.mockReturnValue(8);

    const result = complexMath.avg(4, 2);

    expect(sumMock).toBeCalledWith(4, 2);

    // sum returns 8, it doesn't matter we pass 4 and 2
    expect(result).toBe(4);
  });
});

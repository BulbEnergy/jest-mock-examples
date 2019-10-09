import * as complexMath from './complexMath';
import * as basicMath from './basicMath';

// jest.mock is the first thing that runs in this file (also before the imports)
jest.mock('./basicMath'); // mocks all functions in basicMath

const basicMathMock = basicMath as jest.Mocked<typeof basicMath>;

describe('complexMath:module full mock', () => {
  beforeEach(() => {
    // not necessary because of jest.Mocked
    // (basicMath.sum as jest.Mock).mockReset();
    basicMathMock.sum.mockReset();
  });

  test('mock sum without return value', () => {
    const result = complexMath.avg(4, 2);

    expect(basicMath.sum).toBeCalledWith(4, 2);

    expect(basicMath.divide).not.toBeCalledWith(4, 2);

    // because sum is mocked but not implemented
    expect(result).toBe(NaN);
  });

  test('mock sum with return value', () => {
    basicMathMock.sum.mockReturnValue(8);

    const result = complexMath.avg(4, 2);

    expect(basicMath.sum).toBeCalledWith(4, 2);

    expect(basicMath.sum).toBeCalledWith(4, 2);

    // sum returns 8, it doesn't matter we pass 4 and 2
    expect(result).toBe(4);
  });
});

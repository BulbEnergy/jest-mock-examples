import { getFromDataFile } from './getData';

// When mocking a native module we need to call jest.mock to get from __mocks__/fs
jest.mock('fs');

describe('Mock native module', () => {
  test('should use a mocked fs', async () => {
    const result = getFromDataFile();
    expect(result).toEqual({ fakeData: 'my data' });
  });
});

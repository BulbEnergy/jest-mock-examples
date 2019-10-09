import { requestToGoogle } from './getData';

// Uses mock in manual-mock/__mocks__/getData.ts
jest.mock('./getData');

describe('Mock npm module', () => {
  test('should use mocked request', async () => {
    const result = await requestToGoogle();
    expect(result).toEqual('response from Google');
  });
});

// All fs functions will be a mock and we can override with implementation
const mockFs = jest.genMockFromModule('fs') as any;

mockFs.readFileSync.mockReturnValue('{"fakeData":"my data"}');

export default mockFs;

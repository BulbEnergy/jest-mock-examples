const mockRequest = (_: any, cb: any) => {
  cb(null, null, 'fake result');
};

export default mockRequest;

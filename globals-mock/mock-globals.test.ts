const getRandomNumber = () => Math.random();

const getElementId = () => document.getElementById('id');

const runParseInt = () => parseInt('10', 10);

const fetchGoogle = () => {
  return fetch('https://google.com').then(res => res.json());
};

describe('Mock globals', () => {
  test('should mock Math.random', () => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(0.5);

    expect(getRandomNumber()).toEqual(0.5);
  });

  test('should mock parseInt', () => {
    jest.spyOn(global, 'parseInt').mockImplementationOnce(() => 1);

    expect(runParseInt()).toEqual(1);
  });

  test('should mock document.getElementById', async () => {
    const htmlElement = document.createElement('p');

    jest.spyOn(document, 'getElementById').mockReturnValueOnce(htmlElement);

    expect(getElementId()).toEqual(htmlElement);
  });

  test('should mock fetch', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: 'fake data' }));

    const result = await fetchGoogle();

    expect(result).toEqual({ data: 'fake data' });
  });
});

const service = require('./service.js');
let fetch = require('node-fetch');

test('Testa a função randomNumGen.', () => {
  const randomNumGen = jest.spyOn(service, 'randomNumGen').mockImplementation(() => 10);
  expect(randomNumGen()).toBe(10);
  expect(randomNumGen).toHaveBeenCalledTimes(1);
  randomNumGen.mockRestore();
  const num2 = service.randomNumGen();
  expect(num2 <= 100 && num2 >= 0).toBe(true);
});

test('Substitui implementação da função randonNumGen.', () => {
  const randomNumGen = jest.spyOn(service, 'randomNumGen').mockImplementationOnce((a, b) => a / b);
  expect(randomNumGen(6, 2)).toBe(3);
  expect(randomNumGen).toHaveBeenCalledTimes(1);
  expect(randomNumGen(6, 2)).not.toBe(3);
});

test('Substitui novamente a implementação da função randomNumGen.', () => {
  const randomNumGen = jest.spyOn(service, 'randomNumGen').mockImplementation((a, b, c) => a * b * c);
  expect(randomNumGen(1, 2, 3)).toBe(6);
  expect(randomNumGen(2, 3, 3)).toBe(18);
  randomNumGen.mockRestore();
  randomNumGen.mockImplementation((a) => a * 2);
  expect(randomNumGen(10)).toBe(20);
  expect(randomNumGen(2, 3, 3)).not.toBe(18);
  randomNumGen.mockRestore();
  const num = service.randomNumGen();
  console.log(num)
  expect(num <= 100 && num >= 0).toBe(true);
  expect(randomNumGen(10)).not.toBe(20);
});

test('mocks doggery.', async () => {
  const dog = {
    message: 'https://images.dog.ceo/breeds/frise-bichon/4.jpg',
    status: 'success',
  }

  const failDog = {
    status: 'failed',
  }
  // global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(dog) }));
  global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue(dog) });
  expect(await service.callDoggery().then((resolve) => resolve.message)).toEqual('https://images.dog.ceo/breeds/frise-bichon/4.jpg');
  expect(await service.callDoggery().then((resolve) => resolve.status)).toEqual('success');
  expect(global.fetch).toHaveBeenCalledTimes(2);
  global.fetch.mockClear();
  global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue(failDog) });
  expect(await service.callDoggery().then((resolve) => resolve.status)).toEqual('failed');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
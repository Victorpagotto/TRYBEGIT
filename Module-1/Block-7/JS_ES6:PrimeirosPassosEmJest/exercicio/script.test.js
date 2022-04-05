const functions = require('./script.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(functions.sum(4, 5)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(functions.sum(0, 0)).toBe(0);
  });
  it('Verifica se retorna erro ao inviar string ao invés de número', () => {
    expect(() => {functions.sum(6, '10')}).toThrow();
  });
  it('Verifica se retorna erro "parameters must be numbers" ao inviar string ao invés de número', () => {
    expect(() => {functions.sum(4, '5')}).toThrowError(new Error ('parameters must be numbers'));
  });
});

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  const arr = [1, 2, 3, 4];
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array sem o 3.', () => {
    expect(functions.myRemove(arr, 3)).not.toContain(3);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(functions.myRemove(arr, 3)).not.toEqual(arr);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado (mesmo array).', () => {
    expect(functions.myRemove(arr, 5)).toEqual(arr);
  });
});
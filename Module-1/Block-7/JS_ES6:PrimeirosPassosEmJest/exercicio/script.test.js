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

describe('Função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it('Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é fizzbuzz', () => {
    expect(functions.myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é fizz', () => {
    expect(functions.myFizzBuzz(6)).toBe('fizz');
  });
  it('Faz uma chamada com um número divisível por 3 e verifique se o retorno é  buzz', () => {
    expect(functions.myFizzBuzz(10)).toBe('buzz');
  });
  it('Faz uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o próprio número', () => {
    expect(functions.myFizzBuzz(4)).toBe(4);
  });
  it('Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é false', () => {
    expect(functions.myFizzBuzz('fizz')).toBe(false);
  });
});

describe('Verifica as funções encode e decode.', () => {
  it('Verifica se code é uma função.', () => {
    expect(() => {functions.code}).toBeInstanceOf(Function);
  });
  it('Verifica se decode é uma função.', () => {
    expect(() => {functions.decode}).toBeInstanceOf(Function);
  });
  it('Para a função encode, testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(functions.code('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });
  it('Para a função decode, testa se as vogais 1, 2, 3, 4 e 5 são convertidas em a, e, i, o e u, respectivamente.', () => {
    expect(functions.decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });
  it('Verifica mais um caso de encode.', () => {
    expect(functions.code('adsa, essdu, i, oesd, u')).toEqual('1ds1, 2ssd5, 3, 42sd, 5');
  });
  it('Verifica mais um caso de decode.', () => {
    expect(functions.decode('1ds1, 2ssd5, 3, 42sd, 5')).toEqual('adsa, essdu, i, oesd, u');
  });
  const string = '1ds1, 2ssd5, 3, 42sd, 5';
  it('Verifica se a length não muda.', () => {
    expect(functions.decode(string)).toHaveLength(string.length);
  });
});

const techList = functions.createTechList;

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

const hydrate = functions.hydrate;

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

// describe('', () => {
//   it('', () => {
//     expect(functions.)
//   });
// });
const func = require('./exercicios.js');
const {getPokemonDetails, filter} = require('./pokeexercicios.js');

describe('Testa a função "uppercase":', () => {
  it('Vẽ se é uma função.', () => {
    expect(typeof func).toBe('function');
  });
  it('Vê se retorna a frase em uppercase:', (done) => {
    func('eStA FrAse DeVe rEtoRnAr eM cApSlOcK', (result) => {
      try {
        expect(result).toBe('ESTA FRASE DEVE RETORNAR EM CAPSLOCK');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});

describe('Testa a função "getPokemonDetails":', () => {
  const pokemon = "Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf";
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(filter('Joao'), (err, result) => {
      try {
        expect(err instanceof Error).toBeTruthy();
        done();
      } catch(error) {
        done(error)
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails(filter('Bulbasaur'), (err, result) => {
      try {
        expect(result).toEqual(pokemon);
        done();
      } catch(error) {
        done(error)
      }
    });
  });
});
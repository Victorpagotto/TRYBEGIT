const sum = (a, b) => a + b;
describe('Testa a soma de dois valores da função Sum',() => {
  it('Expects: 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('Expects: 5 + 9 = 14', () => {
    expect(sum(5, 9)).toBe(14);
  });
  it('Expects: 1 + 3 = 4', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('Expects: -5 + 10 = 5', () => {
    expect(sum(-5, 10)).toBeGreaterThan(4);
  });
});

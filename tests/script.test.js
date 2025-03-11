const { soma, divisao, multiplicacao, subtracao } = require('../main/script.js');

test('Testa função de soma',() => {
    expect(soma(15,19)).toBe(34);
});

test('Testa função de divisao',() => {
    expect(divisao(60,6)).toBe(10);
});

test('Testa função de multiplicação',() => {
    expect(multiplicacao(0,956)).toBe(0);
});

test('Testa função de subtração',() => {
    expect(subtracao(50,5)).toBe(45);
});

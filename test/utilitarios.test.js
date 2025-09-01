const Utilitarios = require("../src/utilitarios");

const utils = new Utilitarios();

// Início do bloco de testes do Jest
describe('Testes da classe Utilitarios', () => {

  // Testa se a string é invertida corretamente
  test('inverterString', () => {
    expect(utils.inverterString('abc')).toBe('cba');
  });

  // Conta a quantidade de caracteres em uma string
  test('contarCaracteres', () => {
    expect(utils.contarCaracteres('banana')).toBe(6);
  });

  // Converte a string para letras maiúsculas
  test('paraMaiusculas', () => {
    expect(utils.paraMaiusculas('banana')).toBe('BANANA');
  });

  // Converte a string para letras minúsculas
  test('paraMinusculas', () => {
    expect(utils.paraMinusculas('BANANA')).toBe('banana');
  });

  // Deixa a primeira letra da string maiúscula
  test('primeiraLetraMaiuscula', () => {
    expect(utils.primeiraLetraMaiuscula('banana')).toBe('Banana');
  });

  // Remove espaços em branco no início e no fim da string
  test('removerEspacos', () => {
    expect(utils.removerEspacos('  teste ')).toBe('teste');
  });

  // Repete a string várias vezes
  test('repetirTexto', () => {
    expect(utils.repetirTexto('a', 3)).toBe('aaa');
  });

  // Conta quantas palavras existem na string
  test('contarPalavras', () => {
    expect(utils.contarPalavras('Olá mundo')).toBe(2);
  });

  // Verifica se uma string é um palíndromo (mesma leitura de frente e de trás)
  test('ehPalindromo', () => {
    expect(utils.ehPalindromo('arara')).toBe(true);
    expect(utils.ehPalindromo('TesteTexto')).toBe(false);
    expect(utils.ehPalindromo('A man, a plan, a canal: Panama')).toBe(true);
  });

  // Soma dois números
  test('somar', () => {
    expect(utils.somar(2, 3)).toBe(5);
  });

  // Subtrai dois números
  test('subtrair', () => {
    expect(utils.subtrair(5, 3)).toBe(2);
  });

  // Multiplica dois números
  test('multiplicar', () => {
    expect(utils.multiplicar(2, 4)).toBe(8);
  });

  // Divide dois números
  test('dividir', () => {
    expect(utils.dividir(10, 2)).toBe(5);
  });

  // Verifica se divisão por zero lança erro
  test('dividir por zero', () => {
    expect(() => utils.dividir(10, 0)).toThrow('Divisão por zero');
  });

  // Verifica se o número é par
  test('ehPar', () => {
    expect(utils.ehPar(4)).toBe(true);
    expect(utils.ehPar(5)).toBe(false);
  });

  // Verifica se o valor é um número válido
  test('ehNumero', () => {
    expect(utils.ehNumero(123)).toBe(true);
    expect(utils.ehNumero('abc')).toBe(false);
    expect(utils.ehNumero(NaN)).toBe(false);
  });

  // Gera um número aleatório entre 0 e max (exclusivo)
  test('gerarNumeroAleatorio', () => {
    const num = utils.gerarNumeroAleatorio(50);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(50);
  });

  // Retorna o primeiro elemento do array
  test('primeiroElemento', () => {
    expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
  });

  // Retorna o último elemento do array
  test('ultimoElemento', () => {
    expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
  });

  // Retorna o tamanho do array
  test('tamanhoArray', () => {
    expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
  });

  // Ordena o array em ordem crescente
  test('ordenarArray', () => {
    expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  // Inverte a ordem dos elementos do array
  test('inverterArray', () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  // Calcula a média dos elementos do array
  test('mediaArray', () => {
    expect(utils.mediaArray([1, 2, 3])).toBe(2);
    expect(utils.mediaArray([])).toBe(0); // array vazio retorna 0
  });

  // Remove elementos duplicados do array
  test('removerDuplicados', () => {
    expect(utils.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  // Junta os elementos do array em uma string com separador
  test('juntarArray', () => {
    expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  // Mescla dois objetos (as chaves do segundo sobrescrevem as do primeiro)
  test('mesclarObjetos', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });
});
// Principais manipuladores de dados

// ARRAY
// Mesmo sendo um array de números ou de letras(string) o array que nada mais é que um tipo de lista ainda é um objeto
const arrayByNumber = [1, 2, 3, 4, 5];
console.log(arrayByNumber);
console.log(typeof arrayByNumber);
// */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
const arrayByString = ['a', 'b', 'c', 'd', 'e'];
console.log(arrayByString);
console.log(typeof arrayByString);
// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*- \\

//OBJECT
// construção de um objeto, declara uma constante e iguala a uma chaves {}, dentro das chaves, primeiro vem a chave: é depois coloca o tipo de valor que pode ser variado.
const objeto = {
  chave: 'valor',
  chaveNumero: 100,
  chaveArrayNumero: [1, 2, 3],
  chaverArrayLetras: ['a', 'z', '8', '150'], // se estiver entre aspas sempre será string
  chaveObjeto: {
    endereco: 'Rua x',
    numero: 152,
    complemento: 'Bloco B - 106'
  },
  ativo: true // aqui usa o tipo boolean que pode ser true(verdadeiro) ou false(falso)
};
console.log(objeto.chave);
console.log(objeto.chaveArrayNumero);
console.log(objeto.chaveObjeto.endereco);
console.log(objeto.ativo);
console.log(typeof objeto.ativo);


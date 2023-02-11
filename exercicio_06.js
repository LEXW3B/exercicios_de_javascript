// Declaração de variaveis existe o var, let e const
// var = nunca use
// let = use com cautela
// const = use sempre

let mudar = 'com let pode-se mudar o tipo da variavel';
console.log(typeof mudar);

mudar = 7;
console.log(typeof mudar);
// o uso do let pode gerar muitos erros, por poder reatribuir tipo a uma mesma variavel no uso local

const semMudar = 'a const não deixa reatribuir tipo, tornando sua variavel confiavel e segura';
console.log(typeof semMudar);

// const semMudar = 8; Não é possível declarar novamente a variável de escopo de bloco 'semMudar'.

var naoDa = 'muito ruim';
console.log('usando var string', typeof naoDa);
// O var pode ser alterado o tipo, tanto local quanto globalmente, deixando seu código sem segurança
naoDa = 12;
console.log('usando var numero', typeof naoDa);
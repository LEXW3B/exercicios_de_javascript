//Erro de (not defined) ou ReferenceError: message is not defined
//Aconte quando a váriavel só existe no escopo da função, ou seja dentro da função.

// console.log(message); ReferenceError: message is not defined *-*FORA DO ESCOPO DA FUNÇÃO*-*

function mostrarMenssagem() {
  const message = 'Olá, essa mensssagem será executada na função.'

  console.log(message); // DENTRO DO ESCOPO DA FUNÇÃO
}
// console.log(message); ReferenceError: message is not defined *-*FORA DO ESCOPO DA FUNÇÃO*-*
mostrarMenssagem();

// Se quizer chamar fora da função, tem que declarar a variavel no escopo global
// Somente depois que o número for executado no escopo global, que ele será executado dentro da função.

const number = 40;
console.log('Em cima da função o número é: ', number);

function mostreNumberByMessage() {
  console.log(`O número é ${number} dentro da função.`);
}
console.log(`Em baixo da função o numero é ${number}.`);
mostreNumberByMessage();

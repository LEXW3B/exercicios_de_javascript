// Faça uma função que retorne um nome passado por parametro usando tamplate literals e dentro dessa função também faça uma aero function que retorne alguma menssagem 5 segundos após a primeira menssagem

//parametro => é onde está a palavra (nome);

//O método global setTimeout()define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro expira.

function salutation(nome) {
  console.log(`Olá ${nome}`);
  setTimeout(() => { console.log(`Esta menssagem ${nome} irá aparecer após 5 segundos.`); }, 5000);
}

salutation('Alex');

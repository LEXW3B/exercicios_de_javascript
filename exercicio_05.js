// Onde alcança o contexto funcional

// function funk1() { jeito errado
//   const a = 2;

//   function funk4() {
//     const b = 3;

//     function funck5() {
//       console.log(a, b);
//     }
//   }
// }

function funck2() { // Jeito certo
  const a = 5;

  function funck3() {
    console.log(a);
  }
  funck3()
}

// funck1();
funck2();

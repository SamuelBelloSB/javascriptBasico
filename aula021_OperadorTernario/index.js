// (CONDIÇÃO) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 999;

// SEM OPERADOR TERNÁRIO
// if (pontuacaoUsuario >= 1000) {
//   console.log("Usário VIP");
// } else {
//   console.log("Usário normal");
// }

// USANDO OPERADOR TERNÁRIO
const nivelUsario = pontuacaoUsuario >= 1000 ? "Usario VIP" : "Usário normal";
console.log(nivelUsario);

const corUsario = 'pink';
const corPadrao = corUsario || 'Preta';
console.log(nivelUsario, corPadrao);

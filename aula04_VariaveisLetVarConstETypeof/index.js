// Variáveis let e var

let nome = 'Jão';

console.log(nome, 'nasceu em 1999.');
console.log('Em 2020, '+nome+' conheceu Maria.')

var nome2 = 'Adão' // Var não é usado nessas situações

console.log(nome2, 'nasceu em 1999.');
console.log('Em 2020, '+nome2+' conheceu Maria.')

// Constantes com const e typeof

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = (primeiroNumero * segundoNumero) ** 2;
let resultadoDuplicado = resultado * 2;
console.log('A = '+primeiroNumero+' e B = '+segundoNumero);
console.log('(A * B)^2 = ', resultado);
console.log(resultado+' * 2 = '+resultadoDuplicado);
console.log(typeof primeiroNumero);
console.log(typeof nome)
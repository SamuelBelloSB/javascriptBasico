// Exercício de const e let

const nome = 'Samuel';
const sobrenome = 'Bello';
const idade = 25;
const peso = 72;
const alturaEmMt = 1.77
let imc;
let anoNascimento

imc = peso / (alturaEmMt**2);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, ' tem ', idade, 'anos');
console.log('tem ',alturaEmMt, 'de altura e seu IMC é de', imc)
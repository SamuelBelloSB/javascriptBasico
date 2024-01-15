let num1 = 1;
let num2 = 20;
let num3 = 14.53626674450993;

//  Concatenação de number, basta usar .toString() para alterar o valor da variável para uma string.
console.log("Concatenação de number", num1.toString() + num2);

//  Conversão do number para valor binário:
console.log(`Conversão do number ${num2} para valor binário: ${num2.toString(2)}`);

//  Definir número de casas decimais:
console.log(`Definir número de casas decimais de ${num3} em duas até duas casas decimais: ${num3.toFixed(2)}`); // duas casas decimais

//  Somando números float (com imprecisão)
let num4 = 0.7;
let num5 = 0.1;
console.log(`Soma de ${num4} + ${num5} = ${num4+num5}`);

// Somando números float (com precisão)
num4 += num5;   //  0.8 o valor q deveria ser
console.log(num4);
num4 += num5;   //  0.9
console.log(num4);
num4 += num5;   //  1.0
console.log(num4);
num4 = Number(num4.toFixed(2)); // Ajustando a precisando
console.log(num4)
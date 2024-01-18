// Função basica de retorno valor
function saudacao(nome) {
  return `Olá ${nome}!`;
}
const exemplo = saudacao("Sam");
console.log(exemplo);

// Função de soma
function soma(x, y) {
  const resultado = x + y;
  return `A soma de ${x} + ${y} é igual a: ${resultado}`;
}
console.log(soma(45, 5));

// Declarando função anônima
const raiz = function (n) {
  return n ** 0.5;
};
console.log(`Usando função anônima: ${raiz(9)}`);

// Declarando função usando arrowFunction
const raizQ = n => n ** 0.5;
console.log(`Usando ArrowFunction: ${raizQ(9)}`)


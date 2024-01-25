const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
let nome = "Sam";
// Var só tem escopo de função
var nome2 = "Sam";

var nome2 = "Bello";
if (verdadeira) {
  let nome = "Bell";
  console.log(nome, nome2);
  if (verdadeira) {
    console.log(nome);
    let nome = "outra coisa";
  }
}

//  Factory Objetc
function criaEstudante(nome, sobrenome, idade) {
  return {
    //Esse return que volta objeto
    nome,
    sobrenome,
    idade,
  };
}
const pessoa1 = criaEstudante("Samuel", "Bello", 26);
const pessoa2 = criaEstudante("Luis", "Antônio", 31);
const pessoa3 = criaEstudante("Vitor", "Caetano", 27);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade)
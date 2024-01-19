//  Criação de um objeto
const estudante = {
  nome: "Samuel",
  sobrenome: "Bello",
  idade: 26,

  fala() {
    //   Criação de um método
    console.log(`${this.nome} ${this.sobrenome} está falando que tem ${this.idade} anos.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

console.log(estudante.nome, estudante.idade);
estudante.fala();
estudante.incrementaIdade();
estudante.fala();
estudante.incrementaIdade();
estudante.fala();
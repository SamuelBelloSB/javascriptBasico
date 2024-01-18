const seuNumero = Number(prompt(`Digite seu número: `));
let raizQ, seInt, semLetra, arredondaFloor, arredondaCeil, seuNumeroDuasCasas;

raizQ = seuNumero ** (1 / 2);
seInt = Number.isInteger(seuNumero);
semLetra = Number.isNaN(seuNumero);
arredondaFloor = Math.floor(seuNumero);
arredondaCeil = Math.ceil(seuNumero);
seuNumeroDuasCasas = seuNumero.toFixed(2);

const docNum = document.getElementById("seu-numero");
docNum.innerHTML = seuNumero;

const docRaiz = document.getElementById("raiz-quadrada");
docRaiz.innerHTML = `<p>Raiz quadrada do seu número é: ${raizQ}</p>`;

const docSeInteiro = document.getElementById("se-e-inteiro");
docSeInteiro.innerHTML = `<p>É inteiro: ${seInt}</p>`;

const docSemLetra = document.getElementById("se-e-numero");
docSemLetra.innerHTML = `<p>É NaN: ${semLetra}</p`;

const docArredondaBaixo = document.getElementById("arredonda-baixo");
docArredondaBaixo.innerHTML = `<p>Arredondando para baixo: ${arredondaFloor}</p>`;

const docArredondaCima = document.getElementById("arredonda-cima");
docArredondaCima.innerHTML = `<p>Arredondando para cima: ${arredondaCeil}</p>`;

const docSeuNumeroDuasCasas = document.getElementById("com-duas-casas-decimais");
docSeuNumeroDuasCasas.innerHTML = `<p>Com duas casas decimais: ${seuNumeroDuasCasas}</p>`;

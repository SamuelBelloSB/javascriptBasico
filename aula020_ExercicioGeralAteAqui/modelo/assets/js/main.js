// RESOLUÇÃO 1
// function imc(peso, altura) {
//   let imcPeso = peso;
//   let imcAltura = altura;
//   let imc = imcPeso / imcAltura ** 2;
//   return imc.toFixed(2);
// }
// function calculeImc() {
//   const form = document.querySelector(".form");
//   const resultado = document.querySelector(".resultado");

//   function recebeEventoForm(evento) {
//     evento.preventDefault();
//     const peso = document.querySelector("#input-teste-1");
//     const altura = document.querySelector("#input-teste-2");

//     let fazImc = imc(peso.value, altura.value);
//     if (fazImc < 18.5 && fazImc >= 0) {
//       resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Abaixo do peso)</p>`;
//     } else if (fazImc >= 18.5 && fazImc <= 24.9) {
//       resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Peso normal)</p>`;
//     } else if (fazImc >= 25 && fazImc <= 29.9) {
//       resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Acima do peso)</p>`;
//     } else if (fazImc >= 30 && fazImc <= 34.9) {
//       resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Obesidade grau I)</p>`;
//     } else if (fazImc >= 35 && fazImc < 40) {
//       resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Obesidade grau II)</p>`;
//     } else if (fazImc >= 40) {
//       resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Obesidade grau III)</p>`;
//     } else {
//       resultado.innerHTML = `<p>Valor inválido</p>`;
//     }
//   }

//   form.addEventListener("submit", recebeEventoForm);
// }

//-------------------------------------------
// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#input-teste-1");
  const inputAltura = e.target.querySelector("#input-teste-2");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválido", false);
    return;
  }

  const imc = getImc(peso, altura);
  const grauImc = getGrauImc(imc);

  const msg = `Seu IMC é ${imc} - (${grauImc}).`;
  setResultado(msg, true);
});

function getGrauImc(imc) {
  const grau = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 40) return grau[5];
  if (imc >= 35) return grau[4];
  if (imc >= 30) return grau[3];
  if (imc >= 25) return grau[2];
  if (imc >= 18.5) return grau[1];
  if (imc < 18.5) return grau[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado-valido");
  } else {
    p.classList.add("paragrafo-resultado-invalido");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

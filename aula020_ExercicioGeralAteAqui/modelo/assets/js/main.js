function imc(peso, altura) {
  let imcPeso = peso;
  let imcAltura = altura;
  let imc = imcPeso / imcAltura ** 2;
  return imc.toFixed(2);
}
function calculeImc() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const peso = document.querySelector("#input-teste-1");
    const altura = document.querySelector("#input-teste-2");

    let fazImc = imc(peso.value, altura.value);
    if (fazImc < 18.5 && fazImc >= 0) {
      resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Abaixo do peso)</p>`;
    } else if (fazImc >= 18.5 && fazImc <= 24.9) {
      resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Peso normal)</p>`;
    } else if (fazImc >= 25 && fazImc <= 29.9) {
      resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Acima do peso)</p>`;
    } else if (fazImc >= 30 && fazImc <= 34.9) {
      resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Obesidade grau I)</p>`;
    } else if (fazImc >= 35 && fazImc < 40) {
      resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Obesidade grau II)</p>`;
    } else if (fazImc >= 40) {
      resultado.innerHTML = `<p>Seu IMC é ${fazImc} (Obesidade grau III)</p>`;
    } else {
      resultado.innerHTML = `<p>Valor inválido</p>`;
    }
  }

  form.addEventListener("submit", recebeEventoForm);
}
calculeImc();

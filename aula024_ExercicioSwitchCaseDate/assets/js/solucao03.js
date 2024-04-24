const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = criaData(data);

function zeroAEsquerda(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return diasSemana[diaSemana];
}
function getMesTexto(numMes) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[numMes];
}

function criaData(date) {
  const diaSemana = data.getDay();
  const numMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getMesTexto(numMes);

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}
        ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

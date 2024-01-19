function listarPessoa() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  //   Ação para prevenir o navegador de resetar a página ao clicar no botão submit.
  // form.onsubmit = function (evento) {
  //   evento.preventDefault();
  //   console.log('n foi enviado')
  // };

  // Ação para previnir navegador resetar página ao ciclar no botão submit (versão atualizada)
  //   function recebeEventoForm(evento) {
  //     evento.preventDefault();
  //     console.log("Form não foi enviado");
  //   }

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}
listarPessoa();

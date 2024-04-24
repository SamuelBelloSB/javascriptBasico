const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
    dateStyle: 'full',
};
const opcoesHr = {
    hour: '2-digit',
    minute: '2-digit'
}
h1.innerHTML = `<p>${data.toLocaleDateString('pt-BR', opcoes)} ${data.toLocaleString('pt-BR', opcoesHr)}</p>`

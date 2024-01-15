/**
 * O objeto "window" do navegador contem diversos métodos próprios
 * vou usar alguns deles para conhece-los melhor
 */
let a, b, c, x, y;

a = prompt("Digite um valor para A: ");
b = prompt("Digite um valor para B: ");
c = Number(a) + Number(b)
x = c, x++;
alert(`Soma deu: ${x}`)
let confirma = confirm(`Esta correto a soma de ${a} + ${b} = ${x}?`)
if (confirma == false){
    alert(`Correto, a soma de ${a} + ${b} não é ${x}, mas sim ${c}!!!`)
} else alert(`Errado, a soma de ${a} + ${b} não é ${x}, mas sim ${c}!!!`)
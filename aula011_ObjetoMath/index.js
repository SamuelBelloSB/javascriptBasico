let num1 = 9.54578;
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);
console.log(`Valor original é: ${num1}
Usando Math.floor: ${num2} (arrendonda para baixo)
Usando Math.ceil: ${num3} (arrendonda para cima)
Usando Math.round: ${num4} (arrendonda para o inteiro mais próximo)`);

console.log("\nUsando Math.max numa lista:", Math.max(1,52,531,62336430,215391,5121519,-559923,-19292238,5912512581))
console.log("Usando Math.min numa lista:",Math.min(1,52,531,62336430,215391,5121519,-559923,-19292238,5912512581))
const aleatorio = Math.random() * (10 - 0.1) +0.1;
console.log(`Gerando o numéro aleatório: ${aleatorio}`)
console.log(`Arrendondando o numéro aleatório: ${Math.round(aleatorio)}`)
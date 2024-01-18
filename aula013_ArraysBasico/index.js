const nomes = ["Samuel", "João", "Amanda"];
console.log(nomes);
nomes.unshift("Caio"); // Método '.unshift()' para adicionar elemento como primeiro índice
nomes.unshift("Nathan");
nomes.push("Furina"); // Método '.push()' para adicionar elemento como último índice
nomes.push("Focalor");
nomes[nomes.length] = "Neuvillette"; // Adiciona elemento como último índice.
nomes[1] = "Vitor"; // Altera o elemento do índice
console.log(nomes);
const removidoFinal = nomes.pop(); // Método '.pop()' remove o último elemento e índice do array
const removidoInicio = nomes.shift(); // Método '.shift()' remove o primeiro elemento e índice do array
delete nomes[5]; // Remove o elemento do array, mas mantém o índice.

console.log(nomes);
console.log(`'nomes' é um array: ${nomes instanceof Array}`) // instanceof verifica se a variável é um array
console.log(`Nome removido no final do array: ${removidoFinal}`);
console.log(`Nome removido no ínicio do array: ${removidoInicio}`);

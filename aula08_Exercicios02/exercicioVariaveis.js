/**
 * Usando as variáveis varA, varB e varC, faça a varíavel
 * varA receber o valor de varB
 * varB receber o valor de varC
 * varC receber o valor de varA
 */

let varA = 'A', varB = 'B', varC = 'C'
console.log(varA, varB, varC)

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
console.log(varA, varB, varC)

/** [varA, varB, varC] = [varC, varA, varB]
* console.log(varA, varB, varC)
*/
/**
 * Operadores Aritméticos por Ordem de Precedência
 *  1° ()
 *  2° ** Potenciação
 *  3° * Multiplicação | / Divisão | % Resto da Divisão
 *  4° + Adição e Concatenação | - Subtração *    
 * 
 *  Operador de Incremento = ++:
 *  Pós incremento: variável++ (primeiro aplica o valor e depois faz a conta)
 *  Pré incremento: ++variável (primeiro faz a conta e depois retorna o valor)
 * 
 *  Operador de decremento = --:
 *  Pós decremento: variável--
 *  Pré decremento: --variável
 * 
 *  Operadores de atribuição
 *  variável **= x
 *  variável *= x
 *  variável += x
 *  variável -= x
 * 
 *  Conversor
 *  parseInt('x') converte o valor string para int
 *  parseFloat('x.y') converte o valor string para float
 *  Numer('x.y') interpreta e tenta converter para um tipo numérico seja int ou float
 */

const a = 3, b = 5;
let c = (((a + b)*a**a/b)%a-b)*-1; //uso dos operadores
console.log(c++);
console.log(c--);
console.log(c);
console.log(--c);
console.log(++c);

let contador = 2; 
contador += c; // Atribuição
console.log(contador)

let d = 5;
let x = '5';
console.log(x, typeof (x));
console.log(d*x, typeof (d*x)); // Multiplicação forçada entre tipos diferentes, aqui o próprio JS ajusta o tipo da variável.
let y = parseInt('5');
console.log(d+y, typeof(d+y));
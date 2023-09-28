const prompt = require('prompt-sync')(); // adiciona pacote para ler entrada do usuário

const UM_PORCENTO = 0.01;
const QUADRIENIO = 4;

const salario = Number(prompt('Salário: '));
const tempo = Number(prompt('Tempo (anos): '));

const quadrienios = Math.floor(tempo / QUADRIENIO);
const acrescimo = (quadrienios * UM_PORCENTO) * salario;

const salarioFinal = salario + acrescimo;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final: ${salarioFinal.toFixed(2)}`);

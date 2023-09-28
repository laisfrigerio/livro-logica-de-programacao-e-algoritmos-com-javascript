const prompt = require('prompt-sync')(); // adiciona pacote para ler entrada do usuário

const UM_KG = 1000;

const pesokG = Number(prompt('Peso da Ração (Kg): '));
const consumo = Number(prompt('Consumo diário (gr): '));

const pesoGr = pesokG * UM_KG;

const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);

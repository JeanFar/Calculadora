import {
    operarArray,
    limpar,
    cancelar,
    adicionarValor,
    adicionarOperador,
    updateDisplay
} from './display.js';

function display() {
    document.getElementById("zero").addEventListener("click", () => adicionarValor('0'));
    document.getElementById("um").addEventListener("click", () => adicionarValor('1'));
    document.getElementById("dois").addEventListener("click", () => adicionarValor('2'));
    document.getElementById("tres").addEventListener("click", () => adicionarValor('3'));
    document.getElementById("quatro").addEventListener("click", () => adicionarValor('4'));
    document.getElementById("cinco").addEventListener("click", () => adicionarValor('5'));
    document.getElementById("seis").addEventListener("click", () => adicionarValor('6'));
    document.getElementById("sete").addEventListener("click", () => adicionarValor('7'));
    document.getElementById("oito").addEventListener("click", () => adicionarValor('8'));
    document.getElementById("nove").addEventListener("click", () => adicionarValor('9'));
    document.getElementById("somar").addEventListener("click", () => adicionarOperador('+'));
    document.getElementById("subtracao").addEventListener("click", () => adicionarOperador('-'));
    document.getElementById("multiplicar").addEventListener("click", () => adicionarOperador('*'));
    document.getElementById("dividir").addEventListener("click", () => adicionarOperador('/'));
    document.getElementById("igual").addEventListener("click", operarArray);
    document.getElementById("limpar").addEventListener("click", limpar);
    document.getElementById("cancel").addEventListener("click", cancelar);
    document.getElementById("porcentagem").addEventListener("click", () => adicionarOperador('/100'));
    document.getElementById("inverter-sinal").addEventListener("click", () => adicionarOperador('*(-1)'));
    document.getElementById("virgula").addEventListener("click", () => adicionarValor('.'));
}

display();

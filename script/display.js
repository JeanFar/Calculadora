let conta = [];
let displayOperacao = ['0'];

function operarArray() {
    let resultado = eval(concatenarArray());
    document.getElementById("resultado").innerText = resultado;
    conta = [resultado.toString()];
    displayOperacao = [resultado.toString()];
    updateDisplay();
}

function concatenarArray() {
    return conta.join("");
}

function limpar() {
    document.getElementById("resultado").innerText = "";
    displayOperacao = ['0'];
    conta = [];
    updateDisplay();
}

function cancelar() {
    displayOperacao = ['0'];
    conta = [];
    updateDisplay();
}

function adicionarValor(valor) {
    if (displayOperacao.length === 1 && displayOperacao[0] === '0') {
        displayOperacao = [valor];
    } else {
        displayOperacao.push(valor);
    }
    conta.push(valor);
    updateDisplay();
}

function adicionarOperador(operador) {
    conta.push(operador);
    displayOperacao.push(operador);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("operacao").innerText = displayOperacao.join("");
}

export {
    operarArray,
    limpar,
    cancelar,
    adicionarValor,
    adicionarOperador,
    updateDisplay
    
};

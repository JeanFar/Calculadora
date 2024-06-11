document.addEventListener("DOMContentLoaded", (event) => {
    let conta= [];
    display();
    operarArray();
    



    function display() {

        document.getElementById("zero").addEventListener("click", adicionarZero)

        document.getElementById("um").addEventListener("click", adicionarUm)

        document.getElementById("dois").addEventListener("click", adicionarDois)

        document.getElementById("tres").addEventListener("click", adicionarTres)

        document.getElementById("quatro").addEventListener("click", adicionarQuatro)

        document.getElementById("cinco").addEventListener("click", adicionarCinco)

        document.getElementById("seis").addEventListener("click", adicionarSeis)

        document.getElementById("sete").addEventListener("click", adicionarSete)

        document.getElementById("oito").addEventListener("click", adicionarOito)

        document.getElementById("nove").addEventListener("click", adicionarNove)

        document.getElementById("somar").addEventListener("click", adicionarSoma)

        document.getElementById("subtracao").addEventListener("click", adicionarSubtracao)

        document.getElementById("multiplicar").addEventListener("click", adicionarMultiplicacao)

        document.getElementById("dividir").addEventListener("click", adicionarDivisao)

        document.getElementById("operacao").innerText = concatenarArray();

    }
        function adicionarZero() {
            conta.push("0")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarUm() {
            conta.push("1")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarDois() {
            conta.push("2")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarTres() {
            conta.push("3")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarQuatro() {
            conta.push("4")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarCinco() {
            conta.push("5")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarSeis() {
            conta.push("6")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarSete() {
            conta.push("7")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarOito() {
            conta.push("8")
            document.getElementById("operacao").innerText = concatenarArray();
        }
        function adicionarNove() {
            conta.push("9")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarSoma() {
            conta.push("+")
            document.getElementById("operacao").innerText = concatenarArray();
        }
        function adicionarSubtracao() {
            conta.push("-")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarMultiplicacao() {
            conta.push("*")
            document.getElementById("operacao").innerText = concatenarArray();
        }

        function adicionarDivisao() {
            conta.push("/")
            document.getElementById("operacao").innerText = concatenarArray();
        }


        
        
        function concatenarArray() {
            return conta.join("");
        }
    
        function operarArray() {
            let resultado = eval(concatenarArray());
            document.getElementById("resultado").innerText = resultado;
        }
    

        document.getElementById("igual").addEventListener("click", () => {
            operarArray();

        });

});
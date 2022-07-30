// Função para inserir os números na Tela
function insert(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

// Função para apagar todos os números da tela
function clean() {
    document.getElementById('result').innerHTML = "";
}

// Função para apagar o último número selecionado (Início no índice 0, percorre toda a 'string' e retira o último índice)
function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

// Função para realizar os cálculos.
function calculate() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = eval(result)
    } else {
        document.getElementById('result').innerHTML = "Cálculo vazio"
    }
}
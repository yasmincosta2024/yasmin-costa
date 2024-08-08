function calcularSoma() {
    //Pega os numeros digitados nos campos de entrada 
    var numeroA = parseFloat(document.getElementById('numeroA').Value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);

    //verifica se os números são válidos (ou seja, se são números mesmo)
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        // realiza a soma dos numeros
        var resultado = numeroA+numeroB;

        //exibe o resultado na página 
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " e " + numeroB + " é: " + resultado;
    } else {
        //se os numeros nao forem validos, pede para digitar numeros corretos
        document.getElementById('resultado').innerHTML = "por favor, digite números válidos.";
    }
}
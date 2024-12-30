const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1;
let num2;

rl.question("Informe o primeiro numero: ", (answer1) => {
    num1 = answer1; 
    rl.question("Informe o segundo numero: ", (answer2) => {
        num2 = answer2;
        const resultado = soma(num1, num2);
        console.log("Resultado da soma:", resultado);
        rl.close(); 
    });
});

function soma(a, b) {
    return parseInt(a) + parseInt(b); 
}

function somar() {
    var a = document.getElementById("num1").value; 
    var b = document.getElementById("num2").value; 

    const soma = parseInt(a) + parseInt(b);
    document.getElementById("resultado").textContent = soma;
}
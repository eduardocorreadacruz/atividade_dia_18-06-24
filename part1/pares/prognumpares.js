let resposta = document.getElementById('resposta')
function verificarPar(){
    let num = Number(document.getElementById('num').value)

    let valorPar = num % 2

    console.log('O resultado da divisão inteira é =' + valorPar)
    resposta.innerHTML = 'o resultado da divisão inteira é = ' + valorPar + "<br>"

    if(valorPar == 0){
        console.log("O resultado da divisão é um numero par!")
        resposta.innerHTML = 'o resultado da divisão inteira é um numero par!'
    }
    else{
        console.log("O resultado da divisão é um numero impar!")
        resposta.innerHTML = 'o resultado da divisão inteira é um numero impar!'
    }
        
}
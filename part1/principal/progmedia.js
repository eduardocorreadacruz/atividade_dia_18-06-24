//o programa faz o cálculo da médias das notas obtidas por um aluno durante as avaliações

let resposta = document.getElementById('resposta')

function calcularmedia(){
    // leitura dos dados
    let nota1 = Number (document.getElementById('nota1').value)
    let nota2 = Number (document.getElementById('nota2').value)
    let nota3 = Number (document.getElementById('nota3').value)

    console.log(nota1, nota2, nota3)

    let media = (nota1 + nota2 + nota3) / 3

    console.log("a média das notas é = ". media)
    resposta.innerHTML = "A média das notas é = " + media + "<br>"

    if(media >= 7){
        console.log("parabens você alcançou a média!")
        resposta.innerHTML = "parabens você alcançou a média!"
    }
    else{
        console.log("você precisa fazer a recuperação!")
        resposta.innerHTML = "você precisa fazer a recuperação!"
    }

}
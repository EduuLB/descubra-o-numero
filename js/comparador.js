function recarregarPagina(){
    location.reload();
}
function verificaSeChuteValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += ` <div> Valor Inválido! Tente um número</div> `
        return
    }
    if(chuteMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div> Valor Inválido! Tente um número entre ${menorValor} e  ${maiorValor}`
        return
    }
    if(numero === numeroAleatorio){
        document.body.innerHTML =
            `<h2>Parabéns! Você Acertou!</h2>
            <h3>O número Secreto era: ${numeroAleatorio}</h3>
            <button class="botao-recarregar" onclick="recarregarPagina()">Jogue Denovo!</button>`
    } else if (numero < numeroAleatorio){
        elementoChute.innerHTML += 
        ` <div>O número é maior!  <i class="fa-solid fa-circle-arrow-up"></i> </div>`
    } else {
        elementoChute.innerHTML += 
        ` <div>O número é menor!  <i class="fa-solid fa-circle-arrow-down"></i> </div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}
function chuteMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}
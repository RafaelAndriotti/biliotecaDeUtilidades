function geraNumeroAleatorio(primeiroNumero, segundoNumero){

    for (let i = primeiroNumero; i < segundoNumero; i++){

        primeiroNumero = Math.ceil(primeiroNumero)
        segundoNumero = Math.ceil(segundoNumero)
        const gerarNumero = Math.floor(Math.random() * (segundoNumero - primeiroNumero) + primeiroNumero)
        console.log(gerarNumero);

    }
}

module.exports = { geraNumeroAleatorio }
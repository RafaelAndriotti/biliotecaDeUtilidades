import {erros} from './err/errors.js'

export function geraNumeroAleatorio(primeiroNumero, segundoNumero){

    if(isNaN(primeiroNumero, segundoNumero)){
        throw new Error(erros.NOT_A_NUMBER)
    }
    if(primeiroNumero < 0 || segundoNumero < 0){
        throw new Error(erros.INVALID_NUMBER)
    }
    try {
        for (let i = primeiroNumero; i < segundoNumero; i++){

        primeiroNumero = Math.ceil(primeiroNumero)
        segundoNumero = Math.ceil(segundoNumero)
        const gerarNumero = Math.floor(Math.random() * (segundoNumero - primeiroNumero) + primeiroNumero)
        console.log(gerarNumero);

    }
    } catch (e) {
        return e
    }

}

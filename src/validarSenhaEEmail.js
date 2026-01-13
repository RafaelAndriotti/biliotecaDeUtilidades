import { erros } from './err/errors.js'

export function validaEmail(email) {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    const emailValido = regex.test(email)

    if (emailValido){
        console.log(`O E-mail ${email} eh valido`);
        
    } else{
        throw new Error(erros.INVALID_EMAIL)
    }
}

export function validaSenha(senha) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    
    const senhaValida = regex.test(senha)

    if(senhaValida) {
        console.log('A senha atende os padroes do nosso sistema');
        
    } else {
        throw new Error(erros.INVALID_PASSWORD)
    }

}



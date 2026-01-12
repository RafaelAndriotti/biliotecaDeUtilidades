const errors = require('./err/errors.json')

function validaEmail(email) {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    const emailValido = regex.test(email)

    if (emailValido){
        console.log('E-mail valido');
        

    } else{
        throw new Error(errors.INVALID_EMAIL)
    }
}

function validaSenha(senha) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    
    const senhaValida = regex.test(senha)

    if(senhaValida) {
        console.log('Senha valida');
        
    } else {
        throw new Error(errors.INVALID_PASSWORD)
    }

}

module.exports = { validaEmail, validaSenha }

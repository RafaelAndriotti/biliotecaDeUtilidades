# Biblioteca de Utilidades

## 🎯 Ideia Principal

O desenvolvimento desta biblioteca tem como principal objetivo a prática e o aprimoramento da lógica de programação e do desenvolvimento de bibliotecas em Node.js, sendo um projeto de um estudante iniciante na área.

## ⚙️ Instalação

Para a instalação desta biblioteca, basta executar o seguinte comando no terminal:

```bash
npm install bibliotecaDeUtilidades
```

Após a conclusão, a biblioteca estará instalada e pronta para uso em seu projeto.

## 🚀 Exemplo de Uso

Para utilizar as funções disponíveis, você pode importá-las diretamente do pacote instalado:

```javascript
// Importando as funções da biblioteca
import { validaEmail, validaSenha } from 'bibliotecaDeUtilidades';

// Exemplo de uso da função de validar e-mail
const email = 'teste@gmail.com';
if (validaEmail(email)) {
  console.log(`O e-mail "${email}" é válido.`);
} else {
  console.log(`O e-mail "${email}" é inválido.`);
}

// Exemplo de uso da função de validar senha
const senha = 'SenhaForte123!';
if (validaSenha(senha)) {
  console.log('A senha atende aos critérios de segurança.');
} else {
  console.log('A senha é fraca. Por favor, escolha uma senha mais forte.');
}
```

**Observação:** O caminho de importação ` './src/validarSenhaEEmail.js'` utilizado durante o desenvolvimento deve ser substituído pelo nome do pacote, ` 'bibliotecaDeUtilidades'`, ao consumir a biblioteca após a instalação via npm.

## 📜 Versão

A versão atual da biblioteca é a **1.0.0**.

## 🤝 Contribuição

Como este é um projeto focado no aprendizado, sugestões, melhorias e contribuições são muito bem-vindas. Sinta-se à vontade para abrir uma *issue* ou um *pull request* para discutir mudanças.


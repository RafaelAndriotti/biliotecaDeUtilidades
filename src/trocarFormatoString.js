import { erros } from "./err/errors.js"

export function toCamelCase (palavra) {
    
    if (palavra === '') {
        throw new Error(erros.EMPTY_STRING)
    }
    return palavra
            .toLowerCase()
            .split(/[\s_-]+/)
            .map((palavra, indice) => indice === 0 ? palavra : palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join('')
}

export function toSnakeCase(palavra) {

    if (palavra === '') {
        throw new Error(erros.EMPTY_STRING)
    }
    return palavra
            .toLowerCase()
            .split(/[\s-]+/)
            .join('_')

}

export function toKebabCase(palavra) {

    if (palavra === '') {
        throw new Error(erros.EMPTY_STRING)
    }
    return palavra
            .toLowerCase()
            .split(/[\s_]+/)
            .join('-')

}


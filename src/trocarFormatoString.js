function toCamelCase (palavra) {
    
    return palavra
            .toLowerCase()
            .split(/[\s_-]+/)
            .map((palavra, indice) => indice === 0 ? palavra : palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join('')
}

function toSnakeCase(palavra) {

    return palavra
            .toLowerCase()
            .split(/[\s-]+/)
            .join('_')

}

function toKebabCase(palavra) {

    return palavra
            .toLowerCase()
            .split(/[\s_]+/)
            .join('-')

}

module.exports = { toCamelCase, toKebabCase, toSnakeCase }
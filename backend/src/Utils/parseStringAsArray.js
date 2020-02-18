module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim()); //split corta a string //map percorre as tecnologias // trim tira os espaços.
}
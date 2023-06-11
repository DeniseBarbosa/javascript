let array = [1,2,3]
//ele modifica a array principal
console.log(array.reverse())
console.log(array)
//vai retornar um unico valor, vai somar todos os numros do array
let array1 = [1,2,3]
const soma = array1.reduce(function  (acumulador, valorAtual ) {
    return acumulador + valorAtual
})
console.log(soma)
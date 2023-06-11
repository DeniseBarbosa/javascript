const array01 = [1,5,10,5,"Bom dia", false];
//pergunta se todos são numero e vai retornar false porque dentro do array nem todos os elementos são numero
// no caso do some ele retorna se pelo o menos um dos elementos são numero >> nesse caso será true
let numeros = array01.some(function  ( elemento) {
    
    return typeof elemento === "number";
});

console.log(numeros);
// o filter n altera array original ele retorna uma nova array
const array02 = [1,2,3, "casa"];
let arr = array02.filter(function name(elemento, indice, array02) {
    return typeof elemento === "number"
})
console.log(arr)

//o map vai retornar uma nova array com os dados modificados

const objetos = ["cadeira","lapis","aveia", 1,2,3];
objetos.map(function  ( elemento, indice, objetos) {
    return elemento * elemento
})

console.log(objetos)
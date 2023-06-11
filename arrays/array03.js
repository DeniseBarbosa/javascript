let objetos = [1,2,3];
let objetos01 = [4,5,6,7, "casa"];
//vai pegar o array objetos e separar com virgula (,) > é ima string
console.log(objetos.toString());
//conforme o caracter escolhido ele vai separar o array objtos , inclu o espaço tambem
console.log(objetos.join(" @ "));
// junta os arrays e tmb pode add outros arrays 
let objetos03 = objetos.concat(objetos01, "arvore","cinema", [2023]);
console.log(objetos03)
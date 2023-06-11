let objetos = [ 4,5,13,20,351,4,5];

//retorna o primeiro valor encontrado
console.log(objetos.indexOf(5));
//caso não encontrar retorna -1 >> sempre será retornado isso
console.log(objetos.indexOf(0));
//retorna o ultimo index encontrado
console.log(objetos.lastIndexOf(5));
// retorna verdadeiro ou falso > nesse caso o numero 26 não exise no array > retornara falso
console.log(objetos.includes(26))
// retorna verdadeiro
console.log(objetos.includes(4))
// vai encontrar o primeiro elmento e rtorna verdadeiro, caso não encontrar undefined
console.log(objetos.find(function  ( elemento) {
    // vai retornar o primeiro valor que seja maior que 5 
    return elemento > 1000;
}))
//retorna o índice do primeiro elemento no array que satisfaz a condição especificada em sua função de retorno
// qual o primeiro numero maior que 16? R: 20, qual a posição index do 20? R: index 3
console.log(objetos.findIndex(function  (elemento ) {
    return elemento > 16
}))
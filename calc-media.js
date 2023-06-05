// criar uma função auto invocavel não irá para o escopo global
// O objetivo principal da IIFE (função anonima) é criar um escopo isolado para evitar poluição de escopo global e evitar conflitos de nome. 
(function  ( ) {
    function calcularMedia( ) {
        let total = 0;
        let qtdParametros = arguments.length;
        for (let i = 0; i < qtdParametros; i++) {
            if (typeof arguments[i] !== "number") {
                throw Error("Apenas numeros");
            }
            total += arguments[i]
        }

        return total / qtdParametros
    }
     let media = calcularMedia(4.5,10);
     console.log(`A media é ${media}`)
})()

let publiPrivado = (function  ( ) {
    function privado( ) {
        return "Aqui é uma função privada e que se pode ser acessada dentro desse escopo"
    };
    function publica( ) {
        return "Aqui é uma função publica e pode ser acessada fora do escopo (IIFE)"
    };
    // aqui eu vou definir qual função será publica ;
    return{
        publica: publica
    }
})();

console.log(publiPrivado.publica());
console.log(publiPrivado.privado()); //aqui dará um erro pois essa função é privada 
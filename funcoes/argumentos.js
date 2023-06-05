function somar( n1, n2, n3) {
    return n1 + n2
    
}
console.log(somar(1,2))

// vamos deixar os parametros opcionais 

function calcular( ) {
    
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i]
        
    }
    return total
}

console.log(calcular(1,2,3,4,5))


const anonimo = function ( ) {
    
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i]
        
    }
    return total
}

console.log(anonimo(1,2,3,4,5))

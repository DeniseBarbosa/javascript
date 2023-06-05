
function calcularIMC(peso, altura) {
    if (peso === undefined || altura === undefined){
        throw Error(" Precisa de dois parametros");
    };

    return peso/ (altura * altura)
};
 function classificaIMC( ) {
    if ( imc < 16.9) {
        return "muito abaixo do peso"
    }else if(imc < 18.4){
        return " abaixo do peso"
    }else if (imc < 24.9){
        return " peso normal"
    }else if(imc < 29.90){
        return " acima do peso"
    }else{
        return "Outros"
    }
 }

let imc = calcularIMC(1.70, 68);
console.log(classificaIMC(imc));
console.log(imc);

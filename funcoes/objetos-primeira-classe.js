// chamar de volta 

function chamarDeVolta(chamarDeVolta) {
    console.log("Executar função de callback")
    console.log(typeof chamarDeVolta)
    chamarDeVolta()
}

chamarDeVolta(function  ( ) {
    console.log("Função passada por parametro")
})
// o nome dentro do parametro é opcional 
function teste(callback ) {
    console.log("Função não callback");
    callback();
};

//função anonima 
teste(function  ( ) {
    console.log("Função anonima de callback")
});

function pet( ) {
    console.log("Eu tenho um doguinho");
};
teste(pet);


const array = [1,2,3]
const objeto = {
    nome: "Maria",
    idade: 28,
    altura: 1.70
}

// serve para percorrer objetos o for in 
for(let i in objeto){
    console.log(i)
    console.log(objeto[i])
}

// serve para interação do array 

for( n of array)
{
    console.log(n)
}
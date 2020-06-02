const numeros =  [1,2,3,4,5,6,7,8,9,10]
const numeros2 = [1,2,3,4,5,6,7,8,9,10]

function somar(a,b){
    return a + b
}

console.log(numeros.reduce(somar))

//somando dois registros de arrays diferentes
console.log(numeros[0] + numeros2[0])
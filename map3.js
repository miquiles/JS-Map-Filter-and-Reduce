const numeros = [10,20,30,40,50]

function dobro(numero){
    return numero * 2
}

const numerosDobro = numeros.map(dobro)
console.log(numerosDobro)

console.log(numeros, "array original")
console.log(numerosDobro, "array copiado com map")
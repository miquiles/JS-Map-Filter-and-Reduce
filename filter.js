const notas = [7.1, 8.4,10,6.6,4.4]

function aprovados(nota){
    return nota >= 7
}

const resultado = notas.filter(aprovados)
console.log(resultado)  
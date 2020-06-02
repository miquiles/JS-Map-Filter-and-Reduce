const notas = [10,4.4,6.6,7,9]

function aprovados(nota){
    return nota >=7 
}

function reprovados(nota){
    return nota < 7
}

const resultadoAprovados = notas.filter(aprovados)

console.log("Notas aprovadas", resultadoAprovados)


const resultadoReprovados = notas.filter(reprovados)
console.log("Notas reprovadas", resultadoReprovados)
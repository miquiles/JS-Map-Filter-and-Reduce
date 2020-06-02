const notas = [
    {nome:'alves', media:10},
    {nome:'amanda', media:8},
    {nome:'alcantara', media:7},
    {nome:'henrique', media:6},
    {nome:'pedro', media:5},
    {nome:'miquiles', media:4},


]

function alunosAprovados(nota){
    return nota.media >= 7 
    

}

function alunosReprovados(nota){
    return nota.media < 7
    
}


const aprovados = notas.filter(alunosAprovados)
const reprovados = notas.filter(alunosReprovados)

console.log("Alunos aprovados")
console.log("Parabéns", aprovados)
console.log("Alunos reprovados")
console.log("Joguem menos CS nas aulas",reprovados)




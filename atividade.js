//listaAlunos = ['aluno1','aluno2','aluno3']
dadosAluno = [
    {nome: 'aluno1', email: 'email1', celular: 'celular1', materias:['Matemática', 'Lt', 'DS'], valorNota: ['10', '1' , '3']},
    {nome: 'aluno2', email: 'email2', celular: 'celular2', materias: ['materia1','materia2','materia3']},
    {nome: 'aluno3', email: 'email3', celular: 'celular3', materias: ['materia1','materia2','materia3']},
]

for(let nomeAluno of dadosAluno){
    console.log('Nome do Aluno: ', nomeAluno['nome']);
    
    for(let aluno of dadosAluno){
        console.log('Materia: ', aluno['materias']);

        for(let nota of dadosAluno){
            console.log(' -> Nota: ', nota['valorNota'])
        }
    }

}

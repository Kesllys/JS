//Posição   0    , 1 ,   2
arrays = ['Pedro', 51, true] // Usamos arrays quando queremos fazer lista de algo, podem começar vazios  ou preenchidos, "A minha variável é singular ou plural?" plural = arrays
objeto = {} //usamos quando queremos agrupar informação de algo --várias propriedades

console.log(arrays[2]);

arrays[2] = false;
console.log(arrays[2]);

arrays.push(['MB','B','R','I'])
console.log(arrays[3][1])

aluno = {
    nome: 'Gabriel',
    ra: '24',
    chave: 'valor'
}

console.log(aluno.nome)//.nome mostra APENAS o nome do aluno --isso da erro no typescript
console.log(aluno['ra'])//javascript para onde tá o erro, já o typescript valida o código inteiro e te mostra o erro

listaAlunos = ['Adrian','Vinicius','Cleiton']//toda vez que temos uma lista temos um for, toda vez que temos um for temos uma lista
listaAlunosObj = [
    {nome: 'Adrian', ra: 12, notas: ['I','I','MB']}, //ARRAY(nome) QUE TEM OBJETO(ra) QUE TEM PROPRIEDADE QUE É UMA ARRAY(notas)
    {nome: 'Vinicius', ra: 51, notas: ['MB','B','I']},
    {nome: 'Cleiton', ra: 15, notas: ['MB','MB','MB']},// essa lista possui objeto e vc precisa especificar qual vc quer mostrar
]

console.log(listaAlunosObj[2]['notas'][0])

for(let aluno of listaAlunosObj){
    console.log('RA: ', aluno['ra']);

    for(let nota of aluno['notas']){
        console.log(' -> Nota: ', nota)
    }
}

for(let aluno of listaAlunos){
    console.log('Nome: ', aluno)
}
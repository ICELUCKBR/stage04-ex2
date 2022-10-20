
const alunos = [
    {
        name:"Leticia",
        nota1:10,
        nota2:8.5,
    },
    {
        name:"Augusto",
        nota1:10,
        nota2:8.5,
    },
    {
        name:"Breno",
        nota1:7.5,
        nota2:1.0,
    }
];


for(let aluno of alunos){
    let notas = (aluno.nota1 + aluno.nota2)/2;

    if(notas > 7){
       let message ="Parabens,"+ aluno.name +"\n Sua media é de "+notas + ", Passou";
       alert(message);
    }
    else{
        let message ="Que pena,"+ aluno.name +"\n Sua media é de "+notas + ", Reprovado";
        alert(message);
    }
}



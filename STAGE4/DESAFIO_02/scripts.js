let students = [
  {
    name: "Leticia",
    prova1: 9.5,
    prova2: 6,
  },
  {
    name: "João",
    prova1: 5,
    prova2: 7,
  },
  {
    name: "Eduardo",
    prova1: 2,
    prova2: 4,
  },
  {
    name: "Maria",
    prova1: 10,
    prova2: 8,
  }
]


// function media(prova1, prova2) {
//   return ((prova1+prova2)/2).toFixed(2)
// }

for (let student of students) {

  media = ((student.prova1 + student.prova2) / 2).toFixed(2)

  function printMediaAluno(student) {
    return`A média do(a) aluno(a) ${student.name} é: ${media}`
  }

  let message = printMediaAluno(student);

  if (media >= 7) {
    alert(`${message} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`${message} \n Nao foi dessa vez, ${student.name}. Tente novamente!`)
  }
}
const newCollaborator = (person) => {
  let colaborador = `${person}, ${person.split(' ').join('_').toLowerCase()}@trybe.com`;
  return colaborador;
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees(newCollaborator));

const numAposta = (numAposta) => {
  return numAposta;
}

const checaSorteio = (numAposta, numRandom) => {
  return numAposta === numRandom ? "Parabéns você ganhou" : "Tente novamente"
}

const aposta = (numAposta, checaSorteio) => {
  const sorteio = Math.floor(Math.random(1) * 5);
  return checaSorteio(numAposta, sorteio);
}
// console.log(aposta(numAposta(3), checaSorteio))

const comparaRespostas = (gabarito, resposta) => {
  let pointAcerto = 0;
  let pointError = 0;
  let totalPontos = 0;
  for (i in gabarito) {
    if (resposta[i] === gabarito[i]) {
      pointAcerto += 1;
    } else {
      if (resposta[i] != gabarito[i]) {
        if (resposta[i] === 'N.A') {
          pointAcerto += 0;
        }
        pointError += 0.5;
      }
    }
  }
  totalPontos = pointAcerto - pointError;
  return `pontos de acertos ${pointAcerto}, pontos retirados ${pointError}, total de pontos ${totalPontos}`;
}
const prova = (gabarito, resposta, compairAnswer) => {

  return compairAnswer(gabarito, resposta);
}
console.log(prova(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], comparaRespostas))
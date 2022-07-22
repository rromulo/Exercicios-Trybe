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
console.log(aposta(numAposta(3), checaSorteio))
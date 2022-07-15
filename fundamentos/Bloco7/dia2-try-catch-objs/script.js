function validaSoma(value1, value2) {
  if ((isNaN(value1)) || (isNaN(value2))) {
    throw new Error('Por gentileza, preencha os campos somente com números!')
  }
  if (value1 === '' && value2 === '') {
    throw new Error('Por gentileza, digite os números a serem somados')
  } else if (value1 === '' || value2 === '') {
    throw new Error('Um dos números não encontrado nos campos, por gentileza, informe os dois números!')
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    validaSoma(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (err) {
    document.getElementById('result').innerHTML = `${err.message}`;
  }
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
const btn1 = document.querySelector('.btn');
const h1 = document.querySelector('h1');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
const baseURL = 'https://opentdb.com/api.php?';
const game = {que: [], question:0}; // objeto para armazenar as questoes

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM ready'); // msg sempre que o conteudo do DOM é carregado
  btn1.textContent = 'Start Game';
  inputVal.setAttribute('type', 'number');
  inputVal.value = 10;
})

btn1.addEventListener('click', (e) => {
  btn1.style.display = 'none';
  inputVal.style.display = 'none';
  h1.textContent = inputVal.value + ' questions(s) selected';
  let tempURL = baseURL + 'amount=' + inputVal.value;
  console.log(tempURL);
  popPage(tempURL); // funcao para popular a pagina
})

function popPage (url) {
  fetch(url)
    .then (response => response.json())
    .then (data => {
      game.que = data.results;
      outputPage();
    })
}

function outputPage() {
  output.innerHTML = '';
  let question = game.que[game.question]; // pergunta e indice
  game.question++; // move to next question
  console.log(question);
  let answers = question.incorrect_answers;
  answers.push(question.correct_answer);
  console.log(answers);
  const mainDiv = genElement(output, 'div', '');
  const que1 = genElement(mainDiv, 'div', question.question);
  const optsDiv = genElement(output, 'div', '');
  answers.forEach(opt => {
    const opt1 = genElement(optsDiv, 'button', opt);
    opt1.addEventListener('click', (e) => {
      if (opt == question.correct_answer){
        console.log('correct');
      }else {
        console.log('wrong');
      }
    })
  });
/*   game.que.forEach(element => {
    console.log(element);
  }); */
}

function genElement(parent, eleType, html) {
  const temp = document.createElement(eleType);
  temp.innerHTML = html;
  parent.append(temp);
  return temp;
}

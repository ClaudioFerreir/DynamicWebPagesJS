const output = document.querySelector('.output');
const btn1 = document.createElement('button');
btn1.textContent = 'Reload JSON';
btn1.addEventListener('click', reloader);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const btn2 = document.createElement('button');
const div1 = document.createElement('div');
div1.append(input1);
div1.append(input2);
div1.append(btn2);
btn2.textContent = 'Add to List';
input1.setAttribute('placeholder', 'Name');
input2.setAttribute('type', 'number');
input2.value = '1';
document.body.append(div1);
document.body.append(btn1);
btn2.addEventListener('click', addToList)


console.log(output);
output.textContent = 'New Content';
const url = 'list.json';
let myList = [];
let localData = localStorage.getItem('myList')

window.addEventListener('DOMContentLoaded', () => {
  output.textContent = 'Loading.......';
  if(localData){
    myList = JSON.parse(localStorage.getItem('myList'));
    console.log(myList);
    maker();
  }else{
    reloader();
  }
});

function addToList(){
  console.log(input1.value);
  console.log(input2.value);
  if(input1.value.length > 3){
    const myObj = {
      "name" : input1.value,
      "guests" : input2.value,
      "status" : false
    }
    const val = myList.length;
    myList.push(myObj);
    savetoStorage();
    makeList(myObj, val);
  }
  input1.value = '';
}

function reloader(){
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    myList = data; //atualiza os dados para um armazenamento local
    maker();
    savetoStorage();
  })
}


function maker(){
  output.innerHTML = '';
  myList.forEach((el, index) => {
    makeList(el, index);
  });
}

function makeList(item, index){
  const div = document.createElement('div');
  div.classList.add('box');
  div.innerHTML = `${item.name} #(${item.guests})`;
  output.append(div);

  if(item.status === true){
    div.classList.add('confirmed');
  }else{
    div.classList.add('notConfirmed')
  }

  div.addEventListener('click', (e)=>{
    div.classList.toggle('confirmed');
    div.classList.toggle('notConfirmed');
    console.log(div.classList.contains('confirmed'));
    if(div.classList.contains('confirmed')){
      myList[index].status = true;
    }else{
      myList[index].status = false;
    }
    console.log(myList);
  })

  const span = document.createElement('span');
  span.textContent = 'X';
  div.append(span);
  span.addEventListener('click', (e)=>{
    console.log(index); // incialmente ele ativa 2 eventos na div
    e.stopPropagation(); // evita que o click faca o evento de mudar a cor e isso restringe somente o evento no span
    div.remove();
    myList.splice(index,1);
    savetoStorage();
  })
}

// modo de salvar as alteraçoes
function savetoStorage(){
  console.log(myList);
  localStorage.setItem('myList', JSON.stringify(myList));
}

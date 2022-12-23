const output = document.querySelector('.output');
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
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      myList = data; //atualiza os dados para um armazenamento local
      maker();
      localStorage.setItem('myList', JSON.stringify(myList));
    })
  }
});


function maker(){
  output.innerHTML = '';
  myList.forEach((el, index) => {
    makeList(el, index);
  });
}

function makeList(item, index){
  const div = document.createElement('div');
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
}

console.log("Ola enfermeira2!")


const url = 'J1.json'
myJson();
let data = '';

function myJson(){
  fetch(url)
  .then(response => response.text()) //formato de saida como texto
  .then(text => {
    dataJSON = JSON.parse(text); //dados passados para json
    //console.log(text); // saida como texto
    //console.log(dataJSON); // formato json
    let str = JSON.stringify(dataJSON); // formato de uma string longa
    //console.log(str);
    localStorage.setItem('temp3', str);
  })
};

const localData = localStorage.getItem('temp3');

if(!localData){
  myJson();
  console.log('saved to local storage');
}else{
  console.log(localData);
  data = JSON.parse(localData);
  console.log(data);
}

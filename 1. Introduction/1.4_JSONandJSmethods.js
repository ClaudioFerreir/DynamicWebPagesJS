console.log("Ola enfermeira!")


const url = 'J1.json'
myJson();
let data = '';

function myJson(){
  fetch(url)
  .then(rep => rep.json())
  .then(json => {
    data = json;
    console.log(data);
  })
};



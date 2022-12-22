const person = {
  "firstName": "John",
  "lastName": "Doe",
  "x1": 1,
  "x2": false,
  "interests": ["music", "skiing", "Javascript"],
  "courses": [{
    "name": "Javascript",
    "length": 15
  },
  {
    "name": "HTML",
    "length": 10
  },{
    "name": "Ruby",
    "length": 20
  }]
};

//console.log(person);

const courses = person["courses"];
//console.log(courses); //array of objects

courses.forEach((course, index) => {
  //console.log(course);
 // console.log(course.name);
});

//console.log('---------------------------------');

for(const prop in person) {
 // console.log(prop)
};

//console.log('---------------------------------');

const keys = Object.keys(person);
//console.log(keys);

//console.log('---------------------------------');

keys.forEach((key) => {
  //console.log(person[key]);
});

//console.log('---------------------------------');

const vals = Object.values(person);
//console.log(values);

vals.forEach((val) => {
  //console.log(val);
});

const entries = Object.entries(person); // construimos um array de arrays
// de todas as propriedades e valores do objeto
//console.log(entries);

for (const arr of entries) {
  console.log(arr[0]);
  console.log(arr[1]);
}

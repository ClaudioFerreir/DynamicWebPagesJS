const person = {
  "firstName": "John",
  "lastName": "Doe",
  "x1": 1,
  "x2": false,
  "interests": ["music", "skiing", "Javascript"]
};

console.log(person);
let x = 1;
console.log(person["x" + x]);
console.log(person.interests[2]);

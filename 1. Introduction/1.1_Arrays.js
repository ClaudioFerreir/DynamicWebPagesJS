const arr1 = ['maça', 'banana', 'laranja'];
arr1.push('new value');
console.log(arr1);
arr1[1] = 'uva';
console.log(arr1);
const last = arr1.pop();
console.log(arr1);
console.log(last);
const one = arr1.shift();
console.log(arr1);
console.log(one);
const arr2 = arr1; // arr2 is a reference to arr1
console.log(arr2);
arr2.push('new value');
console.log(arr1);

arr3 = [];
arr1.forEach((item, index) => {
  arr3.push(item);
})
console.log(arr3);

arr4 = arr1.map((item, index) => item);
console.log(arr4);

arr5 = [];
arr1.forEach((item, index) => {
  arr5[index] = item;
});
console.log(arr5);

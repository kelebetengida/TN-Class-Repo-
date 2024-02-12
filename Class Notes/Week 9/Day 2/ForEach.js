//forEach:  Iterate an array of elements.  we use forEach only with arrays. takes a callback
//function with elements, index parameter and array itself.
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

const names = ['jazmine', 'kendra', 'ashley', 'don', 'ron']
names.forEach((element) => console.log(element.toUpperCase()))
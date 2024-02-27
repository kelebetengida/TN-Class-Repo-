//Destructuring is a way to unpack arrays, and objects and assigning //
//to a distinct variable.

//Destructuring Arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

//Destructuring an array of names
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

//Destructing an array that contains two other arrays
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)


  //If we like to skip on of the values in the array we use additional comma. 
  //The comma helps to omit the value at that specific index

  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 is omitted

  console.log(numOne, numThree)
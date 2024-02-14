//iterate through an array, modifies the array elements and returns a new array.  Takes a call
//back function with elements,index and array parameters
//example
// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

// const numbers = [1, 2, 3, 4, 6]
// const numbersSquare = numbers.map(mynum)

// function mynum(element) {
//     return element * element
// }
// console.log(numbersSquare)

const names = ["Bridgett", "Kendra", "Kenny"]
const newNames = names.map((element) => element.toUpperCase())
console.log(newNames)





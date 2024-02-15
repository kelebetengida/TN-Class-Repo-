//Functional Programming
//Instead of writing loops, the latest version of JS introduced lots of built in methods which
//can be used to solve complicated problems.  All builtin methods take callback functions, we will tKE
//a look at forEach, map, filter, reduce, find, every, some and sort.

//forEach
//forEach is used ato iterate an array of elements.  We use forEach with arrays. It takes a 
//callback function with elements, index paramters and array itself. The index and the array
//  are
//  //Examples of forEach

//  Array.forEach(function (element, index, arr) {
//     console.log(index, element, arr)
//  })
//  //the above code can be wirtten using the arrow function
//  arr.forEach((element, index, arr) => {
//     console.log(element, index, arr)
//  }

let sum = 0
 const number = [1, 2, 3, 4, 5];
number.forEach(function(num) {
    sum += num 
})
console.log(sum)

// let sum = 0

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(myNumbers);

// function myNumbers(item) {
//     sum += item
// }


const fruits = ["apples", "oranges", "cherries"]
fruits.forEach(myFruits);

function myFruits(element) {
    console.log(element)
}

const numbers = [2, 3, 40, 50]
numbers.forEach(mynumbers)

function mynumbers(num) {
    console.log(num)
}

const square = n => n * n  // -> 4
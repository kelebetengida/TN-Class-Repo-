A callback is a function which can be passed as parameter to other function. See the example below.

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))

//Higher order functions return functions as a value
//callback function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
    }
    return doWhatever
    }
    return doSomething
  }
console.log(higherOrder(2)(3)(4))


//Let us see where we use call back functions. For instance the forEach method uses call back.
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

//Set interval is used to do some activity continuously within some interval of time
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)

//exaple
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000)


// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000)

  //In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.
  // syntax

// function callback() {
//     // code goes here
//   }
//   setTimeout(callback, duration) // duration in milliseconds

function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.


// Instead of writing regular loop, latest version of JavaScript introduced lots of built in
// methods which can help us to solve complicated problems. All builtin methods take callback function. 
//In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. 
//It takes a callback function with elements, index parameter and array itself. 
//The index and the array optional.

const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
//Reduce takes a a callback function.  The call back function takes accumulator, current value
//and optional inital value as a parameter and returns a single value.
//Basic syntax
//arr.reduce((acc, curr) => {
    //code goes here
//return
//}, initialValue)

//example

const numbers = [1, 3, 4, 5, 6]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
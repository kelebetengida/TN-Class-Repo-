// // //📔  Object

// // // Creating an empty object

// // const person={
// //     hight:"short",
// //     eyeColor:"Brown",
// //     hairColor:"Black",
// //     age:45,
// //     isMaried:false,
// //     // Creating object methods
// //     introduce:function(){
// //         return `Hi I am a ${this.hight} guy with a ${person.eyeColor} eyecolor.`
// //     }
// // }

// // console.log(person.introduce())
// // const Kelebet={
// //     // Creating an objecting with values
// //     jobTitle:"Coding instructor",
// //     greatAtSpelling: false, 
// // //     eyeColor:"Brown",
// // //     age:26,
// // //     skills:["HTML", "CSS", "JS", "Python", "React", "Node", "Express", "MangoDB"],
// // //     canSwim:null,
// // //     canDrive:true,
// // //     Honda:{
// // //         color:"Green",
// // //         make:"Accord",
// // //     },
// // //     // Creating object methods
// // //     introduce:function(){
// // //         return `Hi I am Kelebet. I am a ${this.jobTitle}. I can drive a honda ${this.Honda.make}. The color is ${this.Honda.color}. `
// // //     }
// // // }



// // // console.log(Kelebet.introduce())

// // // // Getting values from an object


// // // console.log(Kelebet)
// // // //Dot notation
// // // console.log(Kelebet.age)
// // // //Bracket Notation
// // // console.log(Kelebet["age"])

// // // // console.log(Kelebet.jobTitle)
// // // // console.log(Kelebet.skills)
// // // console.log(Kelebet.Honda.color)
// // // console.log(Kelebet["Honda"]["color"])


// // // // Setting new key for an object
// // // //An object is a mutable data structure and we can modify the content of an object after it gets created
// // // // const person ={
// // // //     firstName = "Ash",
// // // //     lastName = "Alexander",
// // // //     age:  70,
// // // //     skills:  [
// // // //         'HTNL',
// // // //         'CSS',
// // // //         'Javascript'
// // // //     ],
// // // // }
// // // // // Object Methods
// // // // Getting object keys using Object.keys()
// // // // Getting object values using Object.values()
// // // // Getting object keys and values using Object.entries()
// // // // Checking properties using hasOwnProperty()

// // // //..........................................To Do............................................
// // // // Create an empty object called dog
// // // const dog={
// // //     name:"Spike",
// // //     legs:3.5,
// // //     color:"Black",
// // //     age:14,
// // //     bark:function(){
// // //         return `Woof Woof`
// // //     }
// // // }

// // // console.log(dog.bark())

// // // const dog2={
// // //     name:"Moca",
// // //     legs:4,
// // //     color:"Brown",
// // //     age:5,
// // //     bark:function(){
// // //         return `Woaf Woaf`
// // //     }
// // // }
// // // console.log(dog2.bark())

// // // console.log(dog["color"])
// // // console.log(dog2.color)

// // // //Local Scope
// // // //A variable declared as local can be only be accessed only in a certain block of code
// // // let a = "JS"
// // // let b = 10
// // // function localScope(a, b)
// // // console.log(a, b)
// // // let value = false
// // // //block scope
// // // if (true) {
// // //     let a = "python"
// // //     let b = 20
// // //     let c = 30
// // //     let d = 40
// // // }
// // // localScope()
// // // //Objects
// // // const person = {}

// // // //example
// // // const person = {
// // //     firstName: 'Bridgett',
// // //     lastName:  'Taylor',
// // //     age:  53,
// // //     skills: [
// // //         'dance',
// // //         'sing',
// // //         'draw'
// // //     ]
// // // }
// // // console.log(person)

// // // // Print the the dog object on the console
// // // const dog = {
// // //     color:  'brown',
// // //     weight: '90 lb',
// // //     name: 'Red Foxx'
// // // }
// // // console.log(dog)

// // const person = {
// //     firstName: 'Bridgett',
// //     lastName:  'Taylor',
// //     skills: [
// //         'HTML',
// //         'SQL',
// //         'JS',
// //         'React'
// //     ],
// //     getFullName:  function() {
// //         return ('firstName, lastName')
// //     }
// // }
// // console.log(person.getFullName())


// // //Creating Object methods

// // function sayHello() {
// //     console.log('Hello')
// //   }
// //   setInterval(sayHello, 1000)

//   //In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.
//   // syntax

// // function callback() {
// //     // code goes here
// //   }
// //   setTimeout(callback, duration) // duration in milliseconds

//   function sayHello() {
//     console.log('Hello')
//   }
//   setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

  
// //Functional programming
// // Instead of writing regular loop, latest version of JavaScript introduced lots of built in
// // methods which can help us to solve complicated problems. All builtin methods take callback function. 
// //In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

// // forEach
// // forEach: Iterate an array elements. We use forEach only with arrays. 
// //It takes a callback function with elements, index parameter and array itself. 
// //The index and the array optional.
// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr)
// })
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr)
// })
// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))


// //Map
// //map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , 
// //array parameter and return a new array
// const modifiedArray = arr.map(function (element, index, arr) {
//   return element
// })
// /*Arrow function and explicit return
// const modifiedArray = arr.map((element,index) => element);
// */
// //Example
// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)









//Filter
//Filter: Filter out items which full fill filtering conditions and return a new array.

const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
//Set is a collection of elements. Set can only contains unique elements. 
//Let us see how to create a set in the section below.

//You can create a Javascript set by
  //Passing an Array to new Set()
  //Create a new Set and use add() to add values
  //Create a new Set and use add() to add variables


// //Creating an empty set
// const companies = new Set()
// console.log(companies)

// Set(0) {}

//Creating a new set
const numbers = new Set()
//add values to the new set
numbers.add(1);
numbers.add(2);
numbers.add(3)

console.log(numbers)


//Creating a set from an array
// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)
//   console.log(setOfLanguages)


// //Set is an iterable object and we can iterate through each elements.
//   const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
  
//   const setOfLanguages = new Set(languages)
  
//   for (const language of setOfLanguages) {
//     console.log(language)
//  

//Deleting an element
console.log(fruits.delete('dragonFruit'))
console.log(fruits.size) // 2 elements left in the setWe can delete an element from a set using a method

//CHECKING FOR AN ELEMENT IN A SET
//The has method can help to know if a certain element exists in a set.
console.log(fruits.has('Apple')) // false
console.log(fruit.has('Facebook')) // true

//CLEARING AN ELEMENT FROM A SET
//REMOVES ALL ELEMENTS FROM A SET
companies.clear()
console.log(companies)

//Union of two sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
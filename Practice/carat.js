//Starts with

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /^This/ // ^ means starts with
const matches = txt.match(pattern)
console.log(matches)  // ['This']


//Create a regular expression, that searches for the word regular, make it case insensitive 
//and search globally
//const txt = "Regular expressions are not hard, they are just regular REGULAR"

//Create a regular expression that searches for the word "Regular" at the beginning of the
//string
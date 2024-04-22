//Period - Used to include any character that comes after the period
const pattern = /[a]./g  // this square bracket means a and . means any character except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]

//Find all of the letter b and the letters directly behind it (uppercase & lowercase)
//Input string
const str = "I love blue Ballons and brown teddy BEARS because I like to see  the ballons float and the bears play with balls and the bears learn their abc"
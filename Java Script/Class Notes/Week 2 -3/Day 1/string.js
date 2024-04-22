///////////////////////////////////////////////Welcome To String///////////////////////////////
///////////////////////////////////////////primitive data type/////////////////////////////

//three different kinds of strings 
let firstName='Kelebet'  //single string
let lastName="Engida"      //double string 
let middleName=`Javascript` //literal string 

//concatinating 

let inroduction="My name is" + " "+ firstName+ " " + lastName+ " "+middleName+"."
//console.log(inroduction)

let faveTeam="Dallas CowBoys";
console.log(faveTeam.length)

let teamColor="Blue & grey";
let teaSymbol="star";

let carolsTeam="My favorite team is " + faveTeam + " and their color is "+ teamColor +"."

///////////////////Escape sequence characters////////////////////////

//     \n: new line
//     \t: Tab, means 8 spaces
//     \\: Back slash
//     \': Single quote (')
//     \": Double quote (")

let paragraph="\tThroughout the course, you will \'embark on a journey to understand the core principles and methodologies behind data analytics. \n By delving into statistical techniques, you will learn how to effectively analyze and interpret data, enabling you to draw meaningful insights and make informed business decisions. You will also explore financial forecasting techniques to predict future trends and gain a competitive edge in financial analysis."
// console.log(paragraph)


///////////////////////////////////String Methods ///////////////////////////////



// let js="Javascript";
// .length counts number of char
// console.log(js.length)
// console.log(js.toUpperCase())
///////accsesing the character P in my JS string 
//The way to accses characters in my string is using the index value. 
//ie:   "JavaScript"
/////////0123456789///////

// console.log(js[8])
// console.log(js.length-1)




////ascr
let js="Javascript";
////////0123456789///
console.log(js.slice(3,7))

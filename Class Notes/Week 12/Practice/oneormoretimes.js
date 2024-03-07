//One or more times
//The character + in regular expressions means "match the preceding character
//one or more times".  for example A+ matches one or more of chracter A
//+ is also a quantifier, which is used state the quantity


const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)
console.log(matches)  // ["12", "2020"], this is not what we wantOne or more times +




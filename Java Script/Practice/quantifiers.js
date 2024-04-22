// //We can specify the length of the substring we look for in a text, using a curly bracket
// //Example:  We are looking for a string with the length of 4 characters.
// //Ex: 1
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// //Ex:  2
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^[T]/  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// //Ex:  3
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made']

// const txt = 'I love coding, I hope to become the greatest coder there, I feel like I am the best'
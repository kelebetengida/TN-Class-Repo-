// //A regular expression or RegExp is a small programming language 
// //that helps to find pattern in data. A RegExp can be used to check if 
// // //some pattern exists in a different data types. To use RegExp in 
// // //JavaScript either we use RegExp constructor or we can declare a RegExp 
// // //pattern using two forward slashes followed by a flag. We can create a pattern 
// // //in two ways

// // //To declare a string we use a single quote, double quote a backtick 
// // //to declare a regular expression we use two forward slashes 
// // //and an optional flag. The flag could
// // // be g, i, m, s, u or y

// // //Parameters
// // //A regular expression takes two parameters. One required search pattern 
// // //and an optional flag.

// // //Pattern
// // //A pattern could be a text or any form of pattern which some sort of similarity.
// // // For instance the word spam in an email could be a pattern we are 
// // //interested to look for in an email or a phone number format number might 
// // //be our interest to look for.

// // //Flags
// // //Flags are optional parameters in a regular expression which determine 
// // //the type of searching. Let us see some of the flags:

// // //g: a global flag which means looking for a pattern in whole text
// // //i: case insensitive flag(it searches for both lowercase and uppercase)
// // //m: multiline

// // //Creating a pattern with RegExp Constructor 

// // //without flag
// <<<<<<< HEAD
// // // let pattern = 'love'
// // // let regEx = new RegExp(pattern)

// // //Declaring regular expression with global flag and case insensitive flag.

// // // let pattern = 'love'
// // // let flag = 'gi'
// // // let regEx = new RegExp(pattern, flag)

// // //Declaring a regex pattern using RegExp object. 
// // //Writing the pattern and the flag inside the RegExp constructor

// // // let regEx = new RegExp('love','gi')

// //  //Testing for a match
// // // const str = 'I love JavaScript'
// // // const pattern = /love/
// // // const result = pattern.test(str)
// // // console.log(result)

// // //Replacing a substring
// // //replace(): Executes a search for a match in a string, and replaces the 
// // //matched substring with a replacement substring.

// // const txt = 'Python is the most beautiful language that a human begin has ever created.\
// // I recommend python for a first programming language'

// // matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// // console.log(matchReplaced)



// // const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// // T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// // p%e%o%ple.\
// // I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// // D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// // matches = txt.replace(/%/g, '')
// // console.log(matches)  

// // //Square Bracket
// // //We will use the square bracket to include lower case and lower case
// // const pattern = '[Aa]pple' // this square bracket means either A or a
// // const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
// // const matches = txt.match(pattern)

// // console.log(matches)  

// // const pattern = /[Aa]pple/g // this square bracket means either A or a
// // const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
// // const matches = txt.match(pattern)

// // console.log(matches)  

// // //Let's search for the word "banana"

// // const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
// // const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
// // const matches = txt.match(pattern)

// // console.log(matches)  

// // //Using Escape characeter(\) in RegExp
// // const pattern = /\d/g  // d is a special character which means digits
// // const txt = 'This regular expression example was made in January 12,  2020.'
// // const matches = txt. match(pattern)

// // console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

// // const pattern = /\d+/g  // d is a special character which means digits
// // const txt = 'This regular expression example was made in January 12,  2020.'
// // const matches = txt. match(pattern)

// // console.log(matches)  // ["12", "2020"], this is not what we want

// const pattern = /\d{2}/ // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want


// const chessStory = 'He played the King in a8 and she moved her Queen in c2.';
// const regexpCoordinates = /\w\d/g;
// console.log(chessStory.match(regexpCoordinates));
// // Expected output: Array [ 'a8', 'c2']

// const moods = 'happy 🙂, confused 😕, sad 😢';
// const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
// console.log(moods.match(regexpEmoticons));
// // Expected output: Array ['🙂', '😕', '😢']

// =======
// // let pattern = 'love'
// // let regEx = new RegExp(pattern)

// // //Declaring regular expression with global flag and case insensitive flag.

// // let pattern = 'love'
// // let flag = 'gi'
// // let regEx = new RegExp(pattern, flag)

// // //Declaring a regex pattern using RegExp object. 
// // //Writing the pattern and the flag inside the RegExp constructor

// // let regEx = new RegExp('love','gi')
// >>>>>>> a2cf6fcd8605bf590fb3470c4f37e639098348d5

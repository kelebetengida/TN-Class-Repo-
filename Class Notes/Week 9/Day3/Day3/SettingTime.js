//In JS we can execute some activities in a certain interval of time or we can schedule
//for some time to execute some activies
//--setInterval
//--setTimeout

//Setting Interval using a setInterval function
//In JS, we use setInterval higher order function to do some activity constinuously with in
//some interval of time.  The setInterval global method take a callback function and a duration
//as a parameter.  The duration in milliseconds and the callback will be always called in that
//intrval of time.
//basic syntax

function callback() {
    //code goes here
}
setInterval(callback, duration)

//setting time using a set timeout
//syntax
function callback() {
    //code here
}
setTimeout(callback, duration) //duration is in milliseconds


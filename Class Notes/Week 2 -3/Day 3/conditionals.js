/////////////////////////////////////Conditional statments///////////////

// Consitional statments are statmets or decision based on different conditions.
//By default js analyzes our code sequentialy so that there is flow in out page. 

/////if/////////////////////////////////////////////////////////////

//syntax
// if(condition){
//     //this is the part your truthy or falsy statment . 
// }

// let number=-1;
// if(number>0){
//     console.log(true)
// }

/////////////////if else ////////////////////////////////////////

// if(condition){
//     //this is the part your truthy or falsy statment . 
// } else{ 
//     //this is the part your truthy or falsy statment . 

// }

// let number=-1;
// if(number>0){
//     console.log(true)
// }else {
//     console.log(false)
// }


////////if esle if else /////////////////////////////////////////

// if(condition){
//     //code to returen first truthy 
// } else if(condition){
//     //code to returen a secound truthy value 
// }else {
//     // code to returen falsy value 
// }

let weather = "stormy";
if(weather==="rainy"){
    console.log("you need to to wear a coat")
}else if(weather==="cloudy"){
    console.log("bring a jacket it might be cold today")
}else if(weather==="sunny"){
    console.log("you need to wear shorts")
}else {
    console.log("no need for a coat ")
}
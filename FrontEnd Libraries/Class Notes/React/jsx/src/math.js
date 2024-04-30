const multiply = (a,b)=>a*b;
const divied =(a,b)=>a/b;
const add = (a,b) => a + b 
const subtract = (a,b) => a-b


export default(function doSomeMath(){
    return{
        multiply,
        divied, 
        subtract,
        add,
    }
})()
// //////////////////////////////////Getting Element//////////////////////////////////
/////// Getting elements by tag name
// getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// general syntax
document.getElementsByTagName('tagname')

// const allTitles=document.getElementsByTagName('h1')
// console.log(allTitles)
// console.log(allTitles.length)

// for(let i=0; i<allTitles.length;i++){
//     console.log(allTitles[i])
// }

/////// Getting elements by class name
// getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

//syntax
document.getElementsByClassName('classname')





/////// Getting an element by id
// getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
document.getElementById('id')

const allIds = document.getElementById("first-title")
console.log(allIds)
console.log(allIds.length)

/////// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.
// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

// let firstTitle=document.querySelector("h1") //select the first avilable h1 element 
// console.log(firstTitle)
// let firstTitle=document.querySelector("first-title") //select id with first-title
// console.log(firstTitle)
// let firstTitle=document.querySelector(".title")//select the first avilable element with class atribute 
// console.log(firstTitle)
// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

// const allTitles=document.querySelectorAll("h1")



//////////////////////////////////// Adding attribute/////////////////////////////////////

// const title=document.querySelectorAll("h1")
// title[3].className="title"
// title[3].id="fourth-title"
// console.log(title)
/////// Adding attribute using setAttribute
// const titles=document.querySelectorAll("h1")
// titles[3].setAttribute("class", "title")
// titles[3].setAttribute("id", "fourth-title")

// /////// Adding attribute without setAttribute
// const title=document.querySelectorAll("h1")
// title[3].className="title"
// title[3].id="fourth-title"
// // console.log(title)
// /////// Adding class using classList
// title[3].classList.add("title", "header-title")



// /////// Removing class using remove
// title[3].classList.remove("title")
///////////////////////////////// Adding Text to HTML element/////////////////
/////// Adding Text content using textContent
const title = document.querySelectorAll("h1")
title[3].textContent = "Fourth Title"

///////// Adding Text Content using innerHTML
////////////// Text Content
////////////// Inner HTML
const list = `
<li>Banana</li>
<li>Orange</li>
<li>Grape</li>`

const ul=document.querySelector("ul")
ul.innerHTML=list;
ul.innerHTML="";

//////////////////////////////////////// Adding style/////////////////////////////
/////// Adding Style Color
const allTitles=document.querySelectorAll("h1")
allTitles.forEach((title, i)=>{
    title.style.fontSize="24px"
    if(i%2===0){
        title.style.color="green"
        title.style.backgroundColor="red"
    }else{
        title.style.color="red"
        title.style.backgroundColor="green"
    }
})

/////// Adding Style Background Color
// const allTitles=document.querySelectorAll("h1")
// allTitles.forEach((title, i)=>{
//     if(i%2===0){
//         title.style.backgroundColor="green"
//     }else{
//         title.style.backgroundColor="red"
//     }
// })
/////// Adding Style Font Size
// const allTitles=document.querySelectorAll("h1")
// allTitles.forEach((title, i)=>{
//     if(i%2===0){
//         title.style.fontSize="24px"
//     }else{
//         title.style.fontSize="50px"
//     }
// })
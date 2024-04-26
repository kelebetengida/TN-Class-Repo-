import React from "react"
import ReactDOM from "react-dom"
import userImage from "./images/unnamed.jpg"
const headerStyle = {
  backgroundColor: "yellow"
}
//////Data /////////////////////////////
const welcome = "Welcome to React"
const title = "Getting started with React"
const author = {
  firstName: "Kelebet",
  lastName: " Engida"
}
const date = "April 25, 2024"
////////////////////////Header component///////
const header = (
  <header style={headerStyle}>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <p>React is a JS libarary that is created by facebook.</p>
    <p>Hi I will be your instractor {author.firstName} {author.lastName}</p>
  </header>
)
const userstyle={
  width
}

const user=(
  <div style={userstyle}>
    <img src={userImage} alt="User image"/>
  </div>
)

const mainStyle = {
  backgroundColor: "red"
}


const techs=["HTML", "CSS", "JS"]
const techsFormated= techs.map((tech)=><li>{tech}</li>)
const main = (
  <main>
    <div style={mainStyle}>
      <p>The prerequsites of React is that you know Basic coding languges listed below. </p>
      <ul>
        {techsFormated}
      </ul>
    </div>
  </main>

)
const footerStyle = {
  backgroundColor: "orange"
}
const footer = (
  <div style={footerStyle}>
    <span>created 4/25/2024</span>
  </div>
)
const app = (
  <div>
    {header}
    {user}
    {main}
    {footer}
  </div>
)



const rootElement = document.getElementById("root")

//ReactDOM is the library, render() is a method that comes from the ReactDOM libarary. It takes two prametrs which are What you are rendering and where you are rendering it too. 
ReactDOM.render(app, rootElement)
// ReactDOM.render(What is being rendered, Where it is being rendered )


// What is a module?


// What is package?


// What is the difference between a module and a package.


// What is NPM?


// What is Webpack?


// How do you create a new React project?


// What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?


// What is your favorite code editor (I believe that it is Visual Studio Code)?


// Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).


// Try to make a different custom module in a different file and import it to index.js.
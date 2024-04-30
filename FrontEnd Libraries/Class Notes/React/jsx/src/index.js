import React from "react"
import ReactDOM from "react-dom"
import { add, subtract } from "./math.js"
import profileIcon from "./images/react_logo.png"
const welcome = "Welcome to React"
const title = "Getting started with React"
const author = {
  firstName: "Kelebet",
  lastName: "Engida"
}
const date = "April 29 2024"
const header = (
  <header>
    <div>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <p>
        Instructor: {author.firstName}{author.lastName}
      </p>
      <small>Date: {date} </small>
    </div>
  </header>
)
//injecting arrays
const techs = ["HTML", "CSS", "JS"]
const formatedTechs = techs.map((tech) => <li>{tech}</li>)
const yearBorn=1989
const currentYear= new Date().getFullYear()


const personAge=(
  <p>
    {author.firstName} {author.lastName} is {subtract(currentYear-yearBorn)} years old. 
  </p>
)

//injecting images
const profile = (
  <div>
    <img src={profileIcon} alt="react icon" />
  </div>
)


const main = (
  <main>
    <div>
      <p> Prerequiste toget started with react</p>
      <ul> {formatedTechs}</ul>
      {profile}
      {personAge}
    </div>
  </main>
)



const app = (
  <div>
    {header}
    {main}
   
  </div>
)


const rootElement = document.getElementById("root")
ReactDOM.render(app, rootElement)
// What is a module?
// A module is an initial bit of code that one can build off of
//A module in programing refers to a reusable block of code that encapsulates related faunctionality. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// What is package?
// A package is one or more modules (libraries) grouped (or packaged) together


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// What is the difference between a module and a package.
// Modules are bits of code that you can build from and a Package is a collection of them... module is a single file or a collection of files containg related code. A package is acollation of modules or libraries bundled together. 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// What is NPM?
//NPM – or "Node Package Manager" – is a software registry that contains over 800,000 code packages. It is the default package manager for JavaScript's runtime Node.js. 
//www.npmjs.com

// NPM consists of two main parts:

//1. a CLI (command-line interface) tool for publishing and downloading packages.
//2. an online repository that hosts JavaScript packages.

//All npm packages are defined in files called package.json.
//At least two fields must be present in the definition file: name and version.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// What is Webpack?
// A webpack is a popular open-source JavaScript module bundler. It's mainly used to bundle JavaScript files for usage in a browser, but it can also transform, bundle, or package just about any resource or asset, from JavaScript and CSS to images and fonts. One of the key features of webpack is its ability to handle different types of assets through loaders


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// How do you create a new React project?
// To create a new project through react, you could choose the following methods: npm, npx, or yarn.

//steps to download React 
//1. npx create-react-app YourAPPNAme
//2. npm start to run React code

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
// package.json:  lists the packages your project depends on... conatins metadata about the project. dependecies, scripts, setting configarations
// yarn-lock: It is a file that stores the exact dependency versions for your project together with checksums for each package. 
// .gitignore: A gitignore file specifies intentionally untracked files that Git should ignore. 
// node_modules:  way to package JavaScript code for Node.js. Directory containing all  the dependencies installed for our project. 
// public: single and only html for your react application, static assets, favicon.ico (icons) 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// What is your favorite code editor (I believe that it is Visual Studio Code)?
// it was Atom before it died - Tara


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).
//prettier
// Live server
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Try to make a different custom module in a different file and import it to index.js.

//rectangle.js



//General syntax of a component using arrow function 
// const ComponentName = () => {
//     return <>
//         <p></p>
//         <h1></h1>
//         <tag>content</tag>
//     </>
// }
//General syntax of a component using normal function 
// function ComponentName() {
//     return
//     <>
//         <p></p>
//         <h1></h1>
//         <tag>content</tag>
//     </>
// }
//////////////////////////////////////////////////////////////////////////////////////////
import React from "react"
import ReactDOM from "react-dom"
import { add, subtract } from "./math.js"
import profileIcon from "./images/react_logo.png"
/////////////////////Data////////////////////
const welcome = "Welcome to React"
const title = "Getting started with React"
const author = {
    firstName: "Kelebet",
    lastName: "Engida"
}
const date = "April 29 2024"

/////////////////////Header JSX/////////////


const Header = () => {
    return <header>
        <div>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <p>
                Instructor: {author.firstName}{author.lastName}
            </p>
            <small>Date: {date} </small>
        </div>
    </header>
}

//injecting arrays
const techs = ["HTML", "CSS", "JS"]
const formatedTechs = techs.map((tech) => <li>{tech}</li>)
const yearBorn = 1989
const currentYear = new Date().getFullYear()


const PersonAge = ({ author, currentYear, yearBorn }) => {
    return
    <p>
        {author.firstName} {author.lastName} is  years old.
    </p>
}

//injecting images
const Profile = ({profileIcon}) => {
    return
    <>
        <img src={profileIcon} alt="profile image" />
    </>
};


const Main = () => {
    return
    <main>
        <div>
            <p> Pre-requiste to get started with react</p>
            <ul>
                {formatedTechs}
                <Profile />
                <PersonAge />
            </ul>
        </div>
    </main>
}



const Footer = () => {
    return
    <>
        <p>This is the footer of this page.</p>
    </>
}
const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
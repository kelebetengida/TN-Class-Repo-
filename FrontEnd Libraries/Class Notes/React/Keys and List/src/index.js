// Mapping and rendering arrays
// Mapping array of numbers
// Mapping array of arrays
// Mapping array of objects
// Key in mapping arrays

import React from "react"
import ReactDOM from "react-dom"

//Create a Numbers Component 

// const Numbers = ({number}) => {
//     const list=number.map((number)=><li>{number}</li>)
//     return list
// }

// const App = () => {
//     const numbers=[1,2,3,4,5]
//     return(
//         <div className="container">
//             <div>
//                 <h1>Number List</h1>
//                 {/* Unorder list that calls the Number component and passes the numbers array as a prop */}
//                 <ul>
//                     <Numbers number= {numbers}/>
//                 </ul>
//             </div>
//         </div>
//     )
// }
//const name=["Kelebet", "Victoria", "Phillip"]

// const Names = ({ name }) => {
//     const list = name.map((eachName) => <li>{eachName}</li>)
//     return list
// }

// const App = () => {
//     const names = ["Kelebet", "Victoria", "Phillip"]
//     return (
//         <div className="name">
//             <div>
//                 <h1>Our Name List</h1>
//                 <ul>
//                     <Names name={names} />
//                 </ul>
//             </div>
//         </div>
//     )
// }

// <ul>
//     <li>kelebet</li>
//     <li>Victoria</li>
//     <li>Phillip</li>
// </ul>
//////////////////////////////////////////////
const skills = [
    ["HTML", 10],
    ["CSS", 7],
    ["JS", 9],
    ["react", 8]
]
const Skill=({skill:[tech,level]})=>{
    return <li>{tech} {level}</li>
}

const Skills = ({ skills }) => {
    console.log(skills)
    const list = skills.map((skill) => <Skill skill={skill} />)
    return <ul>{list}</ul>
}

const App = () => {
    return (
        <div class="container">
            <div>
                <h1>Skills Level</h1>
                <Skills skills={skills} />
            </div>
        </div>
    )
}




const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)



/////////////////////////////////////////To Do////////////////////////////////
// Why you need to map an array ?


// Why we need keys during mapping an array ?


// What is the importance of destructuring your code ?


// Does destructuring make your code clean and easy to read ?
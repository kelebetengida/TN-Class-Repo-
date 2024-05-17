// Mapping and rendering arrays
// Mapping array of numbers
// Mapping array of arrays
// Mapping array of objects
// Key in mapping arrays

// import React from "react"
// import ReactDOM from "react-dom"

// //Create a Numbers Component 

// const Numbers = ({number}) => {
//     const list=number.map((number)=><li key={number}>{number}</li>)
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
// const name=["Kelebet", "Victoria", "Phillip"]

// const Names = ({ name }) => {
//     const list = name.map((eachName) => <li key={eachName}>{eachName}</li>)
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
// const skills = [
//     ["HTML", 10],
//     ["CSS", 7],
//     ["JS", 9],
//     ["react", 8]
// ]
// const Skill=({skill:[tech,level]})=>{
//     return <li key={level}>{tech} {level}</li>
// }

// const Skills = ({ skills }) => {
//     console.log(skills)
//     const list = skills.map((skill) => <Skill skill={skill} />)
//     return <ul>{list}</ul>
// }

// const App = () => {
//     return (
//         <div class="container">
//             <div>
//                 <h1>Skills Level</h1>
//                 <Skills skills={skills} />
//             </div>
//         </div>
//     )
// }

import React from "react"
import ReactDOM from "react-dom"

const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
    return (
      <div>
        <h1>{name}</h1>
        <small>{city}</small>
      </div>
    )
  }
  
  // countries component
  const Countries = ({ countries }) => {
    console.log(countries)
    const countryList = countries.map((country) => (
      <Country key={country.name} country={country} />
    ))
    return <div>{countryList}</div>
  }
  const App = () => (
    <div className='container'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
    </div>
  )

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)



/////////////////////////////////////////To Do////////////////////////////////
// Why you need to map an array ?
//Mapping an array is useful when you need to transform each element of the array in someway. 

// Why we need keys during mapping an array ?
//They are unique identification on list iteam so that they can recognized and rendered in the apropriate list item. 

// What is the importance of destructuring your code ?
//simplifying code to make it readable, allows you to unpack the data from props object into distinct variables. It creates clarity on the data. 

// Does destructuring make your code clean and easy to read ?
//yes 
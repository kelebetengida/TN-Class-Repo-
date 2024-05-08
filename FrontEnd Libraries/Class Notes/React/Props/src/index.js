////////////////////////////////Welcome to Props///////////////////////////////////
import React from 'react';
import ReactDOM from "react-dom"
// What is props? 
// Props is a data carrier that passes data between components, 
// primarily from parent components to child components


// Props in Functional Component

const Header = ({welcome, title, theFirstName, theLastName, date}) => {
 
  return (
    <header>
      <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <p>
          Instructor: {theFirstName}{theLastName}
        </p>
        <small>Date: {date} </small>
      </div>
    </header>
  )
}

const User = ({firstName="Jan", lastName="doe", country="US"}) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <small>{country}</small>
    </div>
  )
}


// Function prop types
const Button = ({functionData, text}) => {
  return (
    <button onClick={functionData}>{text}</button>
  )
}



const Main = ({skills, firstName="Uchikoshi", lastName="Kotaro", age="50"}) => {
  return (
    <main>
      <div>
        <p> Pre-requiste to get started with react</p>
        <ul>
          {skills}
          <p>{firstName} {lastName}</p>
          <p>{age}</p>
        </ul>
      </div>
    </main>
  )
}

const Footer = () => {
  return (
    <p>The bottom of the page</p>
  )
}





const App = () => {
  // Function prop types
  const sayHi = () => { alert("Hi") }
  const sayBye = () => { alert("Bye") }
  const WelcomeMe = () => { alert("Welcome to React") }
  // const  = ()
  // Different data type props
  // String props type
  // Number props type
  // Array props type:
  const techs = ["HTML", "CSS", "JS"]
  const formatedTechs = techs.map((tech) => <li>{tech}</li>)
  // Props object
  const author = { firstName: "Stephen", lastName: "King" }
  const date = "May 6, 2024"
  const handletime = () => {
    alert(showDate(new Date()))
  }
  const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  return <div>
    <Header welcome="Welcome to Persevere!" title="Learning about Props" theFirstName={author.firstName} theLastName={author.lastName} />

    <Button text="Say Hi" functionData={sayHi} />
    <Button text="Say Bye" functionData={sayBye} />
    <Button text="Welcome to React" functionData={WelcomeMe} />
    <Button text="Show Date" functionData={handletime} />
    <User firstName='Charllen' lastName="Merriman" country="United States" date={date} />
    <Main firstName="Tara" lastName="Bell" age="26" skills={formatedTechs} />
    <Footer />
  </div>
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)


// Boolean props type






// propTypes
// defaultProps









///////////////////////////////////Assignment/////////////////////////////////
// What is props in a React component ?
//Keyword that stands for properties and is used for passing data from one component to another. 


// How do you access props in a React component ?
// To access  data types  in a React component you can use dot notation in order to access .
// What data types can we pass as props to components ?
// We can pass different types of data 
// What is a propTypes?
//properties for // What is a default propTypes?
// The initial values set under a comonent to be used if they are nt
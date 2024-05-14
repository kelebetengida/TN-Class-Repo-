import React from 'react';
import ReactDOM from "react-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./components/main"
import Button from "./components/button"
import User from "./components/user"


const App = () => {
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
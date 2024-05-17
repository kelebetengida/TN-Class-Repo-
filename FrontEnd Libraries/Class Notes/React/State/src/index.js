//Functional Component 
// import React from "react"
// import ReactDOM from "react-dom"
//class based component 
import React, { component } from "react"
import ReactDOM from "react-dom"


//functional component 
// const Header = ({intro}) => {
//     return (
//         <header>
//             <h1>My Functional Header Component</h1>
//             <h1>{intro}</h1>
//         </header>
//     )
// }


//class based component 
class Header extends component {
    constructor(props) {
        super(props)
    }
    render() {
        //destructuring props
        const {intro}=this.props
        return (
            <div>
                <header>This is a functional component</header>
                <h1>{intro}</h1>
            </div>

        )
    }

}


//main component 
class Main extends component {
    constructor(props) {
        super(props)
    }
    render() {
      const {firstName, lastName} = this.props
        return (
            <main> This is the main component.
                <input>
                    {firstName}
                    {lastName}
                </input>
            </main>
        )
    }
}


//footer component 
class Footer extends component {
    constructor(props) {
        super(props)
    }
    render() {
        const {time} = this.props
        return (
            <footer>
                My Functional Footer Component
                <h1>{time}</h1>
            </footer>
        )
    }
}


//app component 
class App extends component {

    render() {
        const welcome = "Welcome to React"
        const title = "Getting started with React"
        const author = {
            firstName: "Kelebet",
            lastName: "Engida"
        }
        const date = "April 29 2024"
        return (
            <div>
                <Header intro={welcome} />
                <Main
                    firstName={author.firstName}
                    lastName={author.lastName} />
                <Footer time={date} />
            </div>
        )
    }
}





const rootElement = document.getElementById("root")
ReactDOM.render(<Header />, rootElement)

//Mounting (This is the first stage of Componet lifecycle)
//There are four stages to the mounting process. This methods get mounted in this stages
//First constructor() method gets rendered first
//static getDerivedStateFromProps() is 
// import React, {Component} from "react"
// import ReactDOM from "react-dom"

// class App extends Component{
//   //first to run is the constructor
//   constructor(props){
//     super(props)
//     console.log("I am a constructor and I will be the first to run")
//     console.log("-------------------------------------")
//     this.state={
//       firstName:""
//     }
//   }

//   static getDerivedStateFromProps(props, state){
//     console.log("I am the getDrivedStateFromProps method and I will run secound")
//     console.log("-------------------------------------")
//     return null
//   }

//   componentDidMount(){
//     console.log("I am the the componentDidMount method and I will run Last")
//     console.log("-------------------------------------")
//   }
//   render(){
//     console.log("I am the The render method and I will run third")
//     console.log("-------------------------------------")
//     return(
//       <div>
//         <h1> Welcome to React LifeCycle</h1>
//       </div>
//     )
//   }
// }


// const rootElement=document.getElementById("root")
// ReactDOM.render(<App/>,rootElement)

//Updating
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  state = {
    logedin: false
  }

  render() {
    const data = {
      welcome: 'welcome to React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Kelebet',
        lastName: 'Engida',
      },
      date: 'Oct 9, 2024',
    }
    //conditional rendering with if elese statement 
    // let status;

    // if(this.state.logedin){
    //   status=<h1>Welcome user! You are logedin</h1>
    // }else {
    //   status=<h1>You should login to accsess data</h1>
    // }
    //conditional rendering with ternary opreator

    let status=this.state.logedin ? (<h1>Welcome user! You are logedin</h1>) : (<h1>You should login to accsess data</h1>)

    return (
      <div className='app'>
        <Header data={data} />
        {status}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
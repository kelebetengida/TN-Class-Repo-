import ReactDOM from "react-dom"

import React from 'react';

function Display({ number }) {

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  if (number % 2 === 0) {
    return (
      <div className="display" style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor:"green"
      }}> {number}
  
  
      </div>
    )
  } else if (isPrime(number)) {
    return (
      <div className="display" style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: "yellow"
      }}> {number}
  
  
      </div>
    )
  } else {
    return (
      <div className="display" style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: "red"
      }}> {number}
  
  
      </div>
    )
  }
  
}
export default function App() {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  
  

  return (
    <div style={{
      display: 'flex',
      flexWrap: "wrap",
      width: "900px"
    }}>
      {numbers.map((number) =>
        <Display number={number} />)}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
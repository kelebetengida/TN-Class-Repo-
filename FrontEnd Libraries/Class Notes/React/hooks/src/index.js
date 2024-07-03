import ReactDOM from "react-dom"

import React, {useState} from 'react';


function Counter(){

   return (
         <div>
         </div>
   )
}


export default function App() {

  return (
      <>
        <Counter />
      </>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
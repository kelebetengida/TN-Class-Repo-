import ReactDOM from "react-dom"

import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  const reset = () => {
    setCount(0);
  }

  // We are now going to work on a simple todo
  // An array for state, we are going to add to the array
  // and we are going to use a form


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

function TodoList() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      value
    ])
    setValue("")
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={value} onChange={onChange}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {
          todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}


export default function App() {

  return (
    <>
      <Counter />
      <TodoList />
    </>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
import React from "react"

const Button = ({functionData, text}) => {
  return (
    <button onClick={functionData}>{text}</button>
  )
}

export default Button
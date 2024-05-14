import React from "react"

const User = ({firstName="Jan", lastName="doe", country="US"}) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <small>{country}</small>
    </div>
  )
}

export default User
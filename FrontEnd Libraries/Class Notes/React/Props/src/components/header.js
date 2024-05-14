import React from "react"

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

  export default Header
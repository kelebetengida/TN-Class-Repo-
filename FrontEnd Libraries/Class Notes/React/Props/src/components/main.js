import React from "react"

const Main = ({skills, firstName="Uchikoshi", lastName="Kotaro", age="50"}) => {
  return (
    <main>
      <div>
        <p> Pre-requiste to get started with react</p>
        <ul>
          {skills}
          <p>{firstName} {lastName}</p>
          <p>{age}</p>
        </ul>
      </div>
    </main>
  )
}

export default Main
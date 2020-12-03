import React from "react"

function Header(){
  const firstName = "Bob"
  const lastName = "Zirol"
  return(
    <header className="navbar">
      <nav>
        <h1>Hello {firstName + " " + lastName}</h1>
        <h2>Hello {`${firstName} ${lastName}`}</h2>
      </nav>
    </header>
  )
}

export default Header
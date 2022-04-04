import { Link } from "gatsby"
import * as React from "react"

const IndexPage = () => {
  return (
    <main> 
      <title>Home Page</title>
      <h1>Mehran Kamal</h1>
      <Link to="/about">About</Link>
      <p>Hi, my name is Mehran Kamal</p>
      <p>A Student and a Software Engineer based in Karachi, Pakistan. Currently, focused on completing my Final Year Project for degree requirements of BS(Computer Science) from <Link to="https://nu.edu.pk">FAST-NUCES</Link> and crafting Backend Software as SWE Intern at <Link to="https://fenix.life">Fenix Networks</Link></p>
    </main>
  )
}

export default IndexPage

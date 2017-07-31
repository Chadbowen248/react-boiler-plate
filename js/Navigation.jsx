import React from "react"
import { Link } from "react-router"

const Navigation = () =>
  <div className="nav">
    <Link to={"/"}>
      <h1>Home</h1>
    </Link>
    <Link to={"/news"}>
      <h1>News</h1>
    </Link>
    <Link to={"/comics"}>
      <h1>Comics</h1>
    </Link>
    
    
  </div>

export default Navigation

import React from "react"
import { Link } from "react-router"

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/news"}>
          <h1>News</h1>
        </Link>
        <h1>Weather</h1>
      </div>
    )
  }
}

export default Navigation

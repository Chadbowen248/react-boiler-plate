import React from "react"
import { Link } from "react-router"

const Navigation = () =>
  <div className="nav">
    <Link className='nav__link' to={"/"}>
      Home
    </Link>
    <Link className='nav__link' to={"/news"}>
     News
    </Link>
    <Link className='nav__link' to={"/comics"}>
     Comics
    </Link>
  </div>

export default Navigation

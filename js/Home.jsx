import React from "react"
import { string } from "prop-types"

const Home = props =>
  <div className="landing-page page-container" style={{ backgroundImage: `url(public/img/landing-page/1.jpg)` }}>
    <div className="quote-container">
      <h4>
        {props.quote}
      </h4>
      <span className="byline">
        {props.author}
      </span>
    </div>
  </div>

Home.propTypes = {
  quote: string.isRequired,
  author: string.isRequired
}

export default Home

import React from "react"

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

export default Home

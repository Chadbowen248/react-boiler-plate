import React from "react"
import { string } from "prop-types"

const Home = props =>
  <div className="wrapper wrapper--home" style={{ backgroundColor: 'tomato' }}>
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
  quote: string,
  author: string
}

Home.defaultProps = {
  quote: "",
  author: ""
}

export default Home

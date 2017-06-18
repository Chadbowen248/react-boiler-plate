import React from 'react'
import {Link} from 'react-router'

const Navigation = React.createClass({
  render () {
    return (
      <div className='nav-container'>
        <div className='nav'>
          <Link to={'/search'}><h1>News</h1></Link>
          <h1>Weather</h1>
          <h1>Happy</h1>
          <h1>Contact</h1>
        </div>
      </div>
    )
  }
})

export default Navigation

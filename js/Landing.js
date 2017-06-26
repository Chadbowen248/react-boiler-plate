import React from 'react'
import Axios from 'axios'
import '../public/styles/landing.css'

class Landing extends React.Component {
  constructor () {
    super()
    this.state = {
      imageIndex: ''
    }
  }

  componentDidMount () {
    this.setState({
      imageIndex: Math.floor(Math.random() * 7) + 1
    })
    const URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies'
    Axios.get(URL, {headers: {'X-Mashape-Key': 'VX2byySRsJmshOGnZtVwLVW1ymWwp143BhvjsnEhKJnBQDcrrb'}})
    .then(res => {
      console.log(res.data)
      this.setState({test: res.data.quote})
    })

    console.log(this.state.imageIndex)
  }
  render () {
    return (
      <div className='landing-page page-container' style={{backgroundImage: `url(public/img/landing-page/${this.state.imageIndex}.jpg)`}}>
          <div>{this.state.test}</div>
      </div>
    )
  }
}

export default Landing

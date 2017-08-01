import React from "react"
// import Axios from "axios"
import "../public/styles/landing.css"

class ComicsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { comics: [] }
  }

  componentDidMount() {
    const url =
      "https://wrapapi.com/use/chadbowen248/comics/comics/latest?wrapAPIKey=Z9JmPx0za31dMxIkLQJr88cFyIpeJCfJ&year=2017&month=7"

    fetch(url)
      .then(res => res.json())
      .then(data => data.data)
      .then(final => Object.values(final))
      .then(arr => {
        const objects = []
        for (let i = 0; i < arr[0].length; i++) {
          objects.push({
            title: arr[0][i],
            image: arr[1][i],
            date: arr[2][i],
            url: arr[3][i]
          })
        }
        return objects
      })
      .then(final => this.setState({ comics: final }))
  }

  render() {
    return <div>hello</div>
  }
}

export default ComicsContainer

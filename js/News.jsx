import React from "react"
import NewsCard from "./NewsCard.jsx"
import "../public/styles/news.css"

class News extends React.Component {
  render() {
    return (
      <div className="news-page page-container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    )
  }
}

export default News

// import React from 'react';
// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';
// import Fish from './Fish';
// import sampleFishes from '../sample-fishes'
// import base from '../base'

// class App extends React.Component {
//   constructor() {
//     super()
//     this.addFish = this.addFish.bind(this);
//     this.loadSamples = this.loadSamples.bind(this);
//     this.addToOrder = this.addToOrder.bind(this);
//     this.state = {
//       fishes: {},
//       order: {}
//     };
//   }

//   componentWillMount() {
//     this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
//       context: this,
//       state: 'fishes'
//     })

//     const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)
//     if(localStorageRef) {
//       //update App comp order state
//       this.setState({
//         // turn string back to object
//         order: JSON.parse(localStorageRef)
//       })
//     }
//   }

//   componentWillUnmount() {
//     base.removeBinding(this.ref)
//   }

//   componentWillUpdate(nextProps, nextState) {
//     //can't have objects in local storage, need to turn JSON into string
//     localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
//   }

// // pass this function down with props to AddFishForm
// // takes an argument, that's an object and updates the Apps state
//   addFish(fish) {
//     //Make copy of state for silly reasons no one knows...
//     const fishes = {...this.state.fishes};
//     //Date.now() is unique ID
//     const timestamp = Date.now();
//     fishes[`fish-${timestamp}`] = fish;
//     this.setState({ fishes: fishes })

//   }

//   loadSamples(){
//     this.setState({fishes: sampleFishes})
//   }

//   addToOrder(key) {
//     const order = {...this.state.order}
//     order[key] = order[key]+1 || 1
//     this.setState({ order })

//   }

//   render() {
//     return (
//       <div className="catch-of-the-day">
//         <div className="menu">
//           <Header tagline='A really nice fish' />
//           <ul className="list-of-fishes">
//             {Object.keys(this.state.fishes).map(fuckshit => <Fish key={fuckshit} index={fuckshit} details={this.state.fishes[fuckshit]} addToOrder={this.addToOrder}/>)}
//           </ul>
//         </div>
//         <Order fishes={this.state.fishes} order={this.state.order} params={this.props.params}/>
//         <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
//       </div>

//     )
//   }
// }

// export default App;

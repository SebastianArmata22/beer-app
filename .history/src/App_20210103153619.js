import './App.css';
import Card from './Card.js'
import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      data:[],
    }
    this.counter=1
    this.changeBeer=this.changeBeer.bind(this)
  }
  getDateFromApi(url){
    fetch(url)
    .then(response=>response.json())
    .then(dataApi=>this.setState({
      isLoaded: true,
      data: dataApi}))
  }
  changeBeer(){
   // this.setState({isLoaded: false})
    this.counter++
    this.getDateFromApi(`https://api.punkapi.com/v2/beers/${this.counter}`);
  }
  componentDidMount(){
    this.getDateFromApi(`https://api.punkapi.com/v2/beers/${this.counter}`);
  }
  render(){
    return( <div>
      {this.state.isLoaded ? <Card item={this.state.data}/> : <p>is Loading...</p>}
      <button onClick={this.changeBeer}>Next</button>
    </div>
    )
  }
}

export default App;
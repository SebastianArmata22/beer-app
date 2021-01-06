import './App.css';
import Card from './Card.js'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      data:[],
    }
  }
  render(){

    <div>
      {this.state.isLoaded ? <p>is Loading...</p> : <Card />}
    </div>
  }
}

export default App;

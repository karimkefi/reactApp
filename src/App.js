import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters'

class App extends Component {
  state = {
    characters : [
      {name: 'Mario', age:30, vehicle: 'Kart', id:1},
      {name: 'Yoshi', age:25, vehicle:'Shell', id:2},
      {name: 'Princess Peach', age:28, vehicle: 'Carriage', id:3}
    ]
  }

  render() {
    return (
      <div className="App">
       <h1>My React app</h1>
        <h3>Welcome</h3>
        <Characters characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;

//https://www.youtube.com/watch?v=6nrwHiWN29o

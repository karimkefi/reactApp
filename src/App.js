import React, { Component } from 'react';
import './App.css';
import Characters from './components/Characters'
import AddCharacter from './components/addCharacter'

class App extends Component {
  state = {
    characters : [
      {name: 'Mario', age:30, vehicle: 'Kart', id:1},
      {name: 'Yoshi', age:18, vehicle:'Shell', id:2},
      {name: 'Princess Peach', age:28, vehicle: 'Carriage', id:3}
    ]
  }

  render() {
    return (
      <div className="App">
       <h1>My React app</h1>
        <h3>Welcome</h3>
        <Characters characters={this.state.characters}/>
        <AddCharacter />
      </div>
    );
  }
}

export default App;

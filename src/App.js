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

  //this function is updating App.js state but is also 
  // being passed down to the component as a prop (to eventually get data from component)
  addCharacterToApp = (character) => {
    character.id = Math.random();

    //this is using the spread (...) attribute inside a new array []
    //spread takes the objects from characters as elements in the new array (thus creating a copy of characters[])
    let charactersCC = [...this.state.characters, character]
    
    //new characters[] created above via spread operator + new character
    this.setState({
      characters: charactersCC
    })
  }

  render() {
    return (
      <div className="App">
       <h1>My React app</h1>
        <h3>Welcome</h3>
        <Characters characters={this.state.characters}/>
        <AddCharacter addCharacterToApp={this.addCharacterToApp} />
      </div>
    );
  }
}

export default App;

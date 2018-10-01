import React, { Component } from 'react';

class Characters extends Component {
  render() {

    // props are being passed down from App.js this.state.characters
    const { characters } = this.props;

    //for each item in the characters Array, return a new array of JSX
    //key for each element is not essential but should be done to avoid warning
    const characterList = characters.map(char => {
      return (
        <div className="nav" key={char.id}>
          <div>Name: {char.name}</div>
          <div>Age: {char.age}</div>
          <div>Vehicle: {char.vehicle}</div>
          <br></br>
        </div>
      )
    })

    console.log('Component Props here:', this.props);

    return (
      <div className="character-list">
        { characterList }
      </div>
    )

  }
}

export default Characters;
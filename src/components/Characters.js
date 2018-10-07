import React, { Component } from 'react';

// props are being passed down from App.js... 
// here we are using the props Array of characters and function deleteCharacter
const Characters = ({characters, deleteCharacter}) => {

  //for each item in the characters Array, return a new array of JSX
  //key for each element is not essential but should be done to avoid warning
  //The delete function is wrapped in an annonymous function so that it doesnt fire automatically
  const characterList = characters.map(char => {
    return char.age > 20
      ? (<div className="nav" key={char.id}>
          <div>Name: {char.name}</div>
          <div>Age: {char.age}</div>
          <div>Vehicle: {char.vehicle}</div>
          <button onClick={() => {deleteCharacter(char.id)}}>Delete</button>
          <br></br>
        </div>)
      : (null)
  })
  
  return (
    <div className="character-list">
      { characterList }
    </div>
  )

}

export default Characters;
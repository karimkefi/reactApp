import React, { Component } from 'react';

// props are being passed down from App.js... here we are calling the props {characters}
// if there are multiple props being passed down then comma delimit them {characters, films, etc...}
const Characters = ({characters}) => {


  //for each item in the characters Array, return a new array of JSX
  //key for each element is not essential but should be done to avoid warning

  ////OPTION1
  // const characterList = characters.map(char => {
  //   if(char.age > 20) {
  //     return (
  //       <div className="nav" key={char.id}>
  //         <div>Name: {char.name}</div>
  //         <div>Age: {char.age}</div>
  //         <div>Vehicle: {char.vehicle}</div>
  //         <br></br>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  //
  // })

  //OPTION2
  const characterList = characters.map(char => {
    return char.age > 20
      ? (<div className="nav" key={char.id}>
          <div>Name: {char.name}</div>
          <div>Age: {char.age}</div>
          <div>Vehicle: {char.vehicle}</div>
          <br></br>
        </div>)
      : (null)
  })

  console.log('Component Props here:', this.props);

  return (
    <div className="character-list">
      { characterList }
    </div>
  )

}

export default Characters;
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>My React app</h1>
        <p>Welcome</p>
        <NavBar />
      </div>
    );
  }
}

export default App;

//https://www.youtube.com/watch?v=6nrwHiWN29o

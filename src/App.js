import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      brewery: []
    };
  }

  render() {

    return (
      <div className="App">
        <h1>Find a Brewery</h1>
        <div className="search">
        </div>
      </div>
    );
  }
}



export default App;

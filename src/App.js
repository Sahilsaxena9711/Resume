import React, { Component } from 'react';
import './App.css';
import resume from './SahilSaxena.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="glyphicon glyphicon-name icon"></span>
        <img src={resume} className="resume"/>
      </div>
    );
  }
}

export default App;

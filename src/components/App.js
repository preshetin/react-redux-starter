import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from '../containers/CounterContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React/Redux Starter</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
      </div>
    );
  }
}

export default App;

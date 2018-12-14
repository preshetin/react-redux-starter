import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Header from './Header';
import logo from './logo.svg';
import Counter from '../containers/CounterContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section class="section">
            <div class="container">
              <h1 class="title">
                Hello World
              </h1>
              <p class="subtitle">
                My first website with <strong>Bulma</strong>!
              </p>
            </div>
        </section>

        <Counter />
      </div>
    );
  }
}

export default App;

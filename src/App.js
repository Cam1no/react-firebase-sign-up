import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* ここから */}
        <div class="form">
          <form class="register-form">
            <input type="text" placeholder="email address"/>
            <input type="password" placeholder="password"/>
            <button>Sign Up</button>
          </form>
        </div>
        {/* ここまで追記 */}
      </div>
    );
  }
}

export default App;

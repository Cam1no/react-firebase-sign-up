import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';

firebase.initializeApp(firebaseConfig);

class App extends Component {

  constructor(props){
    // 1. Stateの定義
    super(props)
    this.state = {
      email: '',
      password: '', 
    }
  }

  // 3. handleSignUpメソッドの定義
  handleSignUp = e => {
    e.preventDefault()
    // stateからemailとpasswordを取得する
    const { email, password } = this.state;

    // 4. firebaseにemailとpasswordをPOST
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        this.setState({ email: null, password: null })
      })
      .catch(error => {
        console.log('firebase error', error);
      });
  }


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
        <div className="form">
          <form className="register-form">
            {/* 2. テキストが入力されるたびに、State emailが更新されるようにする */}
            <input 
              type="text" 
              placeholder="email address"
              onChange={e => this.setState({ email: e.target.value })}
            />
            {/* 2. テキストが入力されるたびに、State passwordが更新されるようにする */}
            <input 
              type="password" 
              placeholder="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            {/* 3. handleSignUpメソッドをonPress時に実行されるようにする */}
            <button onClick={e => this.handleSignUp(e) }>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

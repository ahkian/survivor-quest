import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizContainer from './container/quiz_container.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizContainer />
      </div>
    );
  }
}

export default App;

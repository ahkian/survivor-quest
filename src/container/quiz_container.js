import React, {Component} from 'react';
import StartPage from '../component/start_page.js';

export default class QuizContainer extends Component {
  constructor(){
    super();
    this.state = {
      gameStarted: false
    }
  }
  startGame = () => {
    this.setState({
      gameStarted: true
    })
  }

  render(){
    return(
      <div>
        {!this.state.gameStarted ? <StartPage startGame={this.startGame} /> : null}
      </div>
    )
  }
}

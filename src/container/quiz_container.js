import React, {Component} from 'react';
import StartPage from '../component/start_page.js'

export default class QuizContainer extends Component {
  constructor(){
    super();
    this.state = {
      gameStarted: false
    }
  }
  render(){
    return(
      <React.Fragment>
        <StartPage />
      </React.Fragment>
    )
  }
}

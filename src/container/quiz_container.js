import React, {Component} from 'react';
import StartPage from '../component/start_page.js';
import Quiz from '../component/quiz.js'

export default class QuizContainer extends Component {
  constructor(){
    super();
    this.state = {
      gameStarted: false,
      questions: [],
      answers: []
    }
  }
  startGame = () => {
    this.setState({
      gameStarted: true
    })
  }

  questionFetcher = () => {
    fetch('http://localhost:3000/api/v1/questions')
    .then(res => res.json())
    .then(json => this.setState({
      questions: json
    }))
  }

  answerFetcher = () => {
    fetch('http://localhost:3000/api/v1/answers')
    .then(res => res.json())
    .then(json => this.setState({
      answers: json
    }))
  }

  componentDidMount(){
    this.questionFetcher()
    this.answerFetcher()

  }

  render(){
    return(
      <div>
        {!this.state.gameStarted ? <StartPage startGame={this.startGame} /> : <Quiz questions={this.state.questions} answers={this.state.answers}/>}
      </div>
    )
  }
}

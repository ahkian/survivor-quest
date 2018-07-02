import React, {Component} from 'react';
import StartPage from '../component/start_page.js';
import Quiz from '../component/quiz.js'

export default class QuizContainer extends Component {
  constructor(){
    super();
    this.state = {
      gameStarted: false,
      questions: [],
      answers: [],
      users: [],
      scores: [],
      currentUser: null
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

  scoreFetcher = () => {
    fetch('http://localhost:3000/api/v1/scores')
    .then(res => res.json())
    .then(json => this.setState({
      scores: json
    }))
  }

  userFetcher = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => this.setState({
      users: json
    }))
  }

  componentDidMount(){
    this.questionFetcher()
    this.answerFetcher()
    this.scoreFetcher()
    this.userFetcher()

  }

  render(){
    return(
      <div>
        {!this.state.gameStarted ? <StartPage startGame={this.startGame} /> : <Quiz users={this.state.users} scores={this.state.scores} questions={this.state.questions} answers={this.state.answers}/>}
      </div>
    )
  }
}

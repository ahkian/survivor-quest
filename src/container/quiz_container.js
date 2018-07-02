import React, {Component} from 'react';
import StartPage from '../component/start_page.js';
import Quiz from '../component/quiz.js'
import Overlay from '../component/overlay.js'

export default class QuizContainer extends Component {
  constructor(){
    super();
    this.state = {
      gameStarted: false,
      questions: [],
      answers: [],
      users: [],
      scores: [],
      currentUser: null,
      userNameBuffer: null
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

  currentUserName = (e) => {
    this.setState({
      userNameBuffer: e.target.value
    })
  }

  setCurrentUser = () => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        name: this.state.userNameBuffer
      })
    })
    .then(res => res.json)
    .then(this.setState({
      currentUser: this.state.userNameBuffer
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
        {!this.state.gameStarted ? <StartPage startGame={this.startGame} /> : (!this.state.currentUser ? <Overlay currentUserName={this.currentUserName} setCurrentUser={this.setCurrentUser} /> : <Quiz currentUser={this.state.currentUser} users={this.state.users} scores={this.state.scores} questions={this.state.questions} answers={this.state.answers}/>)}
      </div>
    )
  }
}

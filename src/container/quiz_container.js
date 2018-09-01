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
      userNameBuffer: null,
      leaderboard: false,
      ordered_scores: []
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
      users: json,
      currentUser: this.state.userNameBuffer
    }))
  }

  currentUserName = (e) => {
    this.setState({
      userNameBuffer: e.target.value
    })
  }

  showLeaderBoard = () => {
    this.setState({
      leaderboard: !this.state.leaderboard
    })
  }

  setCurrentUser = () => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        user: {name: this.state.userNameBuffer}
      })
    })
    .then(res => res.json())
    .then(json => {
      this.userFetcher()
    })
    // .then(this.userFetcher(), console.log(this.state.currentUser, "2"))
    // .then(this.setState({
    //   currentUser: this.state.userNameBuffer
    // }), console.log(this.state.currentUser, "3"))
  }

  orderScores = () => {
    this.setState({
      ordered_scores: this.props.scores.sort((a, b) => {
        return b.points - a.points
      })
    })
  }


  componentDidMount(){
    this.questionFetcher()
    this.answerFetcher()
    this.scoreFetcher()
  }

  render(){
    return(
      <div>
        {!this.state.gameStarted ? <StartPage orderedScores={this.orderedScores} leaderboardFunction={this.showLeaderBoard} leaderboardState={this.state.leaderboard} startGame={this.startGame} scores={this.state.scores} users={this.state.users}/> : (!this.state.currentUser ? <Overlay currentUserName={this.currentUserName} setCurrentUser={this.setCurrentUser} /> : <Quiz currentUser={this.state.currentUser} users={this.state.users} scores={this.state.scores} questions={this.state.questions} answers={this.state.answers}/>)}
      </div>
    )
  }
}

import React, {Component} from 'react';
import { Header, Button, Radio, Form, Dropdown, Grid } from 'semantic-ui-react';
import EndPage from './end_page.js';
import Game from './game.js';

export default class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      lives: 5,
      question_number: 1,
      selectedQuestion: "",
      selectedAnswers: [],
      value: null,
      noAnswer: false
    }
  }

  questionPicker = () => {
    const selectedQuestion = this.props.questions[this.state.question_number - 1]
    this.setState({
      selectedQuestion
    })
  }

  answersPicker = () => {
    const selectedAnswers = this.props.answers.filter(ans => {
      return ans.question_id === this.state.question_number})
    this.setState({
      selectedAnswers
    })
  }

  renderAnswers = () => {
    this.state.selectedAnswers.map(ans => {
      return <Form.Field control={Radio} label={ans.content} key={ans.id} is-correct={ans.is_correct}/>
    })
  }

  submitHandler = (e) => {
    if (this.state.value){
      if (this.state.question_number <= 12 && this.state.lives > 0){
          this.setState({
            question_number: this.state.question_number + 1
          }, () => this.handleSubmit())
      }}
    else {
      this.setState({
        noAnswer: true
      })
    }
  }

  handleSubmit = () => {
    const wantedAnswer = this.state.selectedAnswers.find(ans => {
      return ans.content === this.state.value
    })
    if (!wantedAnswer.is_correct){
      this.setState({
        lives: this.state.lives - 1
      })
    }
    this.setState({
      value: null
    })
    this.questionPicker()
    this.answersPicker()
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.innerText
    })
  }

  clickHandler = () =>  {
    this.setState({
      question_number: this.state.question_number + 1
    })
  }

  hoverHandler=()=>{
    this.setState({
      lives: this.state.lives - 1,
      question_number: this.state.question_number + 1
    })
  }



  componentDidMount(){
    this.questionPicker()
    this.answersPicker()
  }


  render(){
    return(
      <div>
      {this.state.lives < 1 || this.state.question_number > 12 ? <EndPage currentUser={this.props.currentUser} users={this.props.users} scores={this.props.scores} lives={this.state.lives}/>:
      <React.Fragment>

      { this.state.question_number > 10 ? <Game questionNumber={this.state.question_number} clickHandler={this.clickHandler} hoverHandler={this.hoverHandler} lives={this.state.lives} selectedQuestion={this.state.selectedQuestion} /> :
        <Grid centered>
          <Form>
            <Form.Group>
              <div style = {{
                  paddingTop: '50px'
              }}>
                <Header as='h3'>{this.state.selectedQuestion.content}</Header>
                {this.state.noAnswer ? <Header as="h3">You must select an answer!</Header>: null}
                <Dropdown onChange={this.changeHandler} placeholder="Select an answer" text={this.state.value}options={this.state.selectedAnswers.map(ans => {
                  return {key: ans.id, is_correct: ans.is_correct.toString(), text: ans.content, id: ans.id}
                })}/>
              </div>
            </Form.Group>
            <Form.Field style={{verticalAlign: 'middle'}} onClick={this.submitHandler} control={Button}>Submit</Form.Field>
          </Form>
        </Grid>
      }

        <Header color="red" as='h1'>Lives: {this.state.lives}</Header>
      </React.Fragment>}
      </div>
    )
  }
}

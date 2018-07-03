import React, {Component} from 'react';
import { Header, Button, Radio, Form, Dropdown } from 'semantic-ui-react'
import EndPage from './end_page.js'

export default class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      lives: 5,
      question_number: 1,
      selectedQuestion: "",
      selectedAnswers: [],
      value: null
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
    if (this.state.question_number <= 10 && this.state.lives > 0){
        this.setState({
          question_number: this.state.question_number + 1
        })
        const wantedAnswer = this.state.selectedAnswers.find(ans => {
          return ans.content === this.state.value
        })
        if (!wantedAnswer.is_correct){
          this.setState({
            lives: this.state.lives - 1
          })
        }
      this.questionPicker()
      this.answersPicker()
    } else {
      // window.alert(`Game Over! You ${this.state.lives > 0 ? "survived with " + this.state.lives + " lives!" : "died!"}`)
      // window.location.reload()
    }
  }

  changeHandler = (e) => {
    this.setState({
      value: e.target.innerText
    })
  }



  componentDidMount(){
    this.questionPicker()
    this.answersPicker()
  }


  render(){
    return(
      <div>
      {this.state.lives < 1 || this.state.question_number > 10 ? <EndPage currentUser={this.props.currentUser} users={this.props.users} scores={this.props.scores} lives={this.state.lives}/>:
      <React.Fragment>
        <Form>
          <Form.Group>
            <div style = {{
                paddingTop: '50px',
                paddingLeft: '70px'
            }}>
              <Header class="ui center aligned header" as='h3'>{this.state.selectedQuestion.content}</Header>
              <Dropdown style={{verticalAlign: 'middle', paddingBottom: '30px'}} onChange={this.changeHandler} placeholder="Select an answer" text={this.state.value}options={this.state.selectedAnswers.map(ans => {
                return {key: ans.id, is_correct: ans.is_correct.toString(), text: ans.content, id: ans.id}
              })}/>
            </div>
          </Form.Group>
          <Form.Field style={{verticalAlign: 'middle'}} onClick={this.submitHandler} control={Button}>Submit</Form.Field>
        </Form>
        <Header color="red" as='h1'>Lives: {this.state.lives}</Header>
      </React.Fragment>}
      </div>
    )
  }
}

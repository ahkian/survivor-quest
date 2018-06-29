import React, {Component} from 'react';
import { Header, Button, Input, Radio, Select, Form, Dropdown } from 'semantic-ui-react'

export default class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      lives: 10,
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
    console.log(this.state.value)
  }

  changeHandler = (e) => {

    this.setState({
      value: e.target.innerText
    }, console.log("The value is ",this.state.value, "the target is ", e.target))
  }

  formattedAnswers = () => {
    this.state.selectedAnswers.map(ans => {
      return {key: ans.id, is_correct: ans.is_correct.toString(), text: ans.content, id: ans.id}
    })
  }

  componentDidMount(){
    this.questionPicker()
    this.answersPicker()
  }


  render(){
    return(
      <React.Fragment>
        <Form>
          <Form.Group>
            <Header as='h3'>{this.state.selectedQuestion.content}</Header>
            <Dropdown onChange={this.changeHandler} placeholder="Select an answer" text={this.state.value}options={this.state.selectedAnswers.map(ans => {
              return {key: ans.id, is_correct: ans.is_correct.toString(), text: ans.content, id: ans.id}
            })}/>
          </Form.Group>
          <Form.Field onClick={this.submitHandler} control={Button}>Submit</Form.Field>
        </Form>
      </React.Fragment>
    )
  }
}

import React, {Component} from 'react';
import { Button, Input, Radio, Form } from 'semantic-ui-react'

export default class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      lives: 10,
      question_number: 1,
      selectedQuestion: "",
      selectedAnswers: []
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

  componentDidMount(){
    this.questionPicker()
    this.answersPicker()
  }


  render(){
    return(
      <React.Fragment>
        <Form>
          <Form.Group inline>
            <label>{this.state.selectedQuestion.content}</label>

          </Form.Group>
        </Form>
      </React.Fragment>
    )
  }
}

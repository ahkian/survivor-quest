import React, { Component } from 'react';
import { Header, Table, Label, Button, Grid } from 'semantic-ui-react';

export default class EndPage extends Component {
  constructor(){
    super()
    this.state = {
      ordered_scores: []
    }
  }

  handleClick = () => {
    window.location.reload()
  }

  sendScore = () => {
    const currentUserObj = this.props.users.find(user => {
      return user.name === this.props.currentUser
    })
    fetch('http://localhost:3000/api/v1/scores', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        points: this.props.lives * 100,
        user_id: this.props.users.find(user => {
          return user.name === this.props.currentUser
        }).id
      })
    })
  }

  orderScores = () => {
    this.props.scores.push({points: this.props.lives * 100, user_id:this.props.users.find(user => {
      return user.name === this.props.currentUser}).id})
    this.setState({
      ordered_scores: this.props.scores.sort((a, b) => {
        return b.points - a.points
      })
    })
  }

  componentDidMount(){
    this.sendScore()
    this.orderScores()
  }

  render(){
    return(
      <React.Fragment>
        <Header as='h1'>Game Over</Header>
        {this.props.lives > 0 ? <Header style={{color: "green"}} as='h3'>Congratulations on surviving! You won with {this.props.lives * 100} points!</Header> : <Header style={{color: "red"}} as='h3'>"You lost all of your lives!"</Header>}
        <Grid centered>
          <Table compact style={{width: '50%'}}>
            <Table.Header className="ui center aligned text">
              <Table.Row className="ui center aligned text">
                <Table.HeaderCell className="ui center aligned text" colSpan='2'>Leaderboard</Table.HeaderCell>
              </Table.Row>
              <Table.Row className="ui center aligned text">
                <Table.HeaderCell className="ui center aligned text">Name</Table.HeaderCell>
                <Table.HeaderCell className="ui center aligned text">Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body className="ui center aligned text">
              {this.state.ordered_scores.map(score => {
                let username = this.props.users.find(user => {
                  return user.id === score.user_id
                })
                return <Table.Row className="ui center aligned text" color={score.points > 0 ? 'green' : 'red'} key={score.id}>
                  <Table.Cell className="ui center aligned text">{username.name}</Table.Cell>
                  <Table.Cell className="ui center aligned text">{score.points}</Table.Cell>
                </Table.Row>
              })}
            </Table.Body>
          </Table>
        </Grid>
        <Grid centered>
          <Button onClick={this.handleClick}>Return To Main Menu</Button>
        </Grid>
      </React.Fragment>
    )
  }
}

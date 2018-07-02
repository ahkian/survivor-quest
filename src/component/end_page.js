import React, { Component } from 'react';
import { Header, Table, Label } from 'semantic-ui-react';

export default class EndPage extends Component {
  constructor(){
    super()

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

  componentDidMount(){
    this.sendScore()
  }

  render(){
    return(
      <React.Fragment>
        <Header as='h1' style={{color: "red"}}>Game Over</Header>
        {this.props.lives > 0 ? <Header as='h3'>Congratulations on surviving! You won with {this.props.lives * 100} points!</Header> : <Header as='h3'>"You lost all of your lives!"</Header>}
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.scores.map(score => {
              let username = this.props.users.find(user => {
                return user.id === score.user_id
              })
              return <Table.Row key={score.id}>
                <Table.Cell>{username.name}</Table.Cell>
                <Table.Cell>{score.points}</Table.Cell>
              </Table.Row>
            })}
          </Table.Body>
        </Table>
      </React.Fragment>
    )
  }
}

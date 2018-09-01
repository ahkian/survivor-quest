import React, { Component } from 'react';
import { Header, Table, Label, Button, Grid } from 'semantic-ui-react';

export default class Leaderboard extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

//Currently trying to order scores in start_page.js scores still undefined in props


  render(){
    return(
      <div className={this.state.hidden}>
        <Table compact style={{width: '50%'}}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className="ui center aligned text">
            {this.props.ordered_scores.map(score => {
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
      </div>
    )
  }
}

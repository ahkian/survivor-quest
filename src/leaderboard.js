import React, { Component } from 'react';
import { Header, Table, Label, Button, Grid } from 'semantic-ui-react';

export default class Leaderboard extends Component{
  constructor(){
    super()
    this.state = {
      orderScores: null
    }
  }

  orderScores = () => {
    this.setState({
      ordered_scores: this.props.scores.sort((a, b) => {
        return b.points - a.points
      })
    })
  }

  componentDidMount(){
    this.orderScores()
  }

  render(){
    return(
      
    )
  }
}

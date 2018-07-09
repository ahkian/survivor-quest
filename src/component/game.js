import React, { Component } from 'react';
import {Table, Image, Button} from 'semantic-ui-react';
import Game2 from './game2.js'
import Game3 from './game3.js'

export default class Game extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
          (this.props.questionNumber > 12) ? <Game3 clickHandler={this.props.clickHandler} hoverHandler={this.props.hoverHandler} /> : <Game2 clickHandler={this.props.clickHandler} hoverHandler={this.props.hoverHandler} />

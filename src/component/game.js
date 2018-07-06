import React, { Component } from 'react';
import {Table, Image, Button} from 'semantic-ui-react';
import Game2 from './game2.js'

export default class Game extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
          <Game2 clickHandler={this.props.clickHandler} hoverHandler={this.props.hoverHandler} />
    )
  }
}

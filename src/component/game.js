import React, { Component } from 'react';
import {Table, Image, Button} from 'semantic-ui-react';

export default class Game extends Component {

  render(){
    return(
      <React.Fragment>
        {this.props.question}
      </React.Fragment>
    )
  }
}

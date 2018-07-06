import React, {Component} from 'react';
import {Table, Image, Button} from 'semantic-ui-react';

export default class Game2 extends Component {
  constructor(){
    super()

  }

    render(){
      return(
          <div>
              <h1>Find a safe path to the button</h1>
              <Image.Group>
                <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
                <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
                <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
                <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} spaced='right'/>
              </Image.Group>
              <Image.Group>
                <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
                <Image size='mini' src={require('../images/path.jpg')}/>
                <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
              </Image.Group>
              <Image.Group>
                  <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
                  <Image size='mini' src={require('../images/path.jpg')}/>
                  <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
                  <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} spaced />
                  <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} spaced/>
              </Image.Group>
              <Button onClick={this.props.clickHandler}>Click Here To Live</Button>
          </div>
      )
  }
}

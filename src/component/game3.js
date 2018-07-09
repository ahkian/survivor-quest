import React, {Component} from 'react';
import {Image, Button} from 'semantic-ui-react';

export default class Game3 extends Component {
  render(){
    return(
      <div>
        <Image.Group>
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
          </Image.Group>
          <Image.Group>
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
          </Image.Group>
          <Image.Group>
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Button onClick={this.props.clickHandler}>Click Me!</Button>
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
          </Image.Group>
          <Image.Group>
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
          </Image.Group>
          <Image.Group>
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
          </Image.Group>
          <Image.Group>
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image src={require("../images/path.jpg")} />
            <Image onMouseOver={this.props.hoverHandler} src={require("../images/bear.jpg")} />
          </Image.Group>
      </div>
    )
  }
}

import React from 'react'
import {Image} from 'semantic-ui-react';


export default class Overlay extends React.Component {
  render () {
    return(
      <React.Fragment>
        <img paddingTop='50px' size="huge" src={require("../images/run-bear2.png")}/>
        <p>




        </p>
        <h1>Enter your name:</h1>
        <input onChange={this.props.currentUserName}></input>
        <button onClick={this.props.setCurrentUser}>Set Name</button>
      </React.Fragment>
    )
  }
}

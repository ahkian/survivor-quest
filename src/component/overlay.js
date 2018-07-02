import React from 'react'


export default class Overlay extends React.Component {
  render () {
    return(
      <React.Fragment>
        <h1>Enter your name:</h1>
        <input onChange={this.props.currentUserName}></input>
        <button onClick={this.props.setCurrentUser}>Set Name</button>
      </React.Fragment>
    )
  }
}

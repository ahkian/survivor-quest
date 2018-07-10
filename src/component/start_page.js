import React from 'react';
import {Button, Header, Image} from 'semantic-ui-react';
import '../start_page.css';


const StartPage = (props) => { return(
  <div className="startpage">
    <Header as='h1'>Welcome To Survivor Quest!</Header>
    <Image inline onClick={props.startGame} src={require("../images/run-bear2.png")} />
    <Header as="h3">Click Bear to Begin!</Header>
  </div>
)}

export default StartPage;

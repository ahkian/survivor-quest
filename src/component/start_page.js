import React from 'react';
import {Button, Header} from 'semantic-ui-react';
import '../start_page.css';

const StartPage = (props) => { return(
  <div>
    <Header as='h1'>Welcome To Survivor Quest!</Header>
    <Button onClick={props.startGame} type="button">Start Quiz</Button>
  </div>
)}

export default StartPage;

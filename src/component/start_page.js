import React from 'react';
import {Header, Image, Button} from 'semantic-ui-react';
import '../start_page.css';
import Leaderboard from '../leaderboard.js';


const StartPage = (props) => { return(
  <div className="startpage">
    <Header as='h1'>Welcome To Survivor Quest!</Header>
    <Image inline onClick={props.startGame} src={require("../images/run-bear2.png")} />
    <Header as="h3">Click Bear to Begin!</Header>
    <Header color='green' as="h3">When submitting answers please click the top half of the button.</Header>
    <Button onClick={props.leaderboardFunction}>Leaderboard</Button>
    {props.leaderboardState ? <Leaderboard orderedScores={props.orderedScores} /> : null}
  </div>
)}

export default StartPage;

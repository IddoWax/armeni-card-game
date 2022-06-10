import Grid from '@mui/material/Grid';
import React from 'react';
import Player from './Player'
export default class Game extends React.Component {
  constructor(props) {
    super();
    /*
    this.state = {
      player : props.data.player,
      otherPlayers : props.otherPlayers,
      cardsInDeck: props.cardsInDeck
    }
    */
   this.state = {
     players: [{name:'Orin'}, {name:'Iddo'}]
   };
  }
  render() {
    return (
      <Grid container alignContent='center' sx={{backgroundColor: 'primary.dark'}}> 
        <Grid item>
          {this.state.players.map(player =><Player name={player.name}/>)}
        </Grid>
      </Grid>
    );
  }
}
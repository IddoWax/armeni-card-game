import './App.css';
import React from 'react';
import GameApi from './screens/Game/GameApi'
import TopBar from './components/AppBar';
import { Grid } from '@mui/material';

const App = () => {
  return(
  <Grid container alignItems='center' alignContent='center' spacing={1}>
    <Grid container justifyContent='center' alignItems='center' alignContent='center' item md={100}>
      <TopBar/>
      <GameApi/>
    </Grid>
  </Grid>
  )
};
export default App;

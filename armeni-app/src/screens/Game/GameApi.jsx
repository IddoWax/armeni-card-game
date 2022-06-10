import React from 'react';
import {useAxiosGet} from '../../network/Api';
import Game from '../../components/Game'

const mockData = {
    currentPlayer : {
        name: 'Orin',
        cards: ['A', 'B', 'C']
    },
    otherPlayers : [
        {name:'Iddo',
        numberOfCards: 5},
        {name:'Jony',
        numberOfCards: 5}
    ],
    cardsInDeck : 25,
    topCardInPile : ['Ace']
  }

// This functionall component that wraps the armeni game and is responsible to get all data from server for initializing the game
const GameApi = () => {
    const { data, error, isLoading } = useAxiosGet('/test_api');
    if(isLoading) return (<h1>Loading....</h1>);
    if(error) return (<p>{error}</p>);
    return(
        <Game data={mockData ?? []}/>
    )
};
export default GameApi;
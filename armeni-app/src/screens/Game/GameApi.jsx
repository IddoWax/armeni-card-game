import React from 'react';
import {useAxiosGet} from '../../network/Api';
import Game from '../../components/Game'

// This functionall component that wraps the armeni game and is responsible to get all data from server for initializing the game
const GameApi = () => {
    const { data, error, isLoading } = useAxiosGet('/test_api');
    if(isLoading) return (<h1>Loading....</h1>);
    if(error) return (<p>{error}</p>);
    return(
    <Game data={data ?? []}/>
    )
};
export default GameApi;
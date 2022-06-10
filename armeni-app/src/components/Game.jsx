import { useState, useEffect } from "react";

// React component responsible for managing an Armeni game
const Game = (data) => {
  console.log('Game',data);
    return (
        <div>
        <h1>Hello World</h1>
        <p>{JSON.stringify(data.data)}</p>
      </div>
    );
}

export default Game;
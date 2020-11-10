import React, { createContext, useEffect, useState } from 'react';
import { getGameStatus, getGameScore } from '../helpers/data';
import { useMoves } from '../hooks/useMoves';


export const GameContext = createContext();

const GameProvider = (props) => {
    
    // Game Status
    const [gameStatus, setGameStatus] = useState(getGameStatus());
    const [gameScore, setGameScore] = useState(getGameScore());

    // Hook for Moves
    const [gamemoves, addGameMove, , resetGameMoves] = useMoves('');
    const [playermoves, , addPlayerMove, resetPlayerMoves] = useMoves('');

    useEffect(() => {
        [...gamemoves].length > 0 && setGameScore({ level: (Math.floor( [...gamemoves].length / 10 ) + 1), score: [...gamemoves].length });
        // eslint-disable-next-line
    }, [gamemoves]);

    useEffect(() => {
        if(playermoves.length > 0){
            if( (gamemoves.substring(0, playermoves.length)) === playermoves ){
                if(gamemoves.length === playermoves.length){
                    resetPlayerMoves('');
                    addGameMove();
                    setGameStatus({state: 'START', lastpos: 0, turn: 'GAME'});
                }
            }else{
                console.log('Game Over...');
                resetGameMoves('');
                setGameStatus({state: 'STOP', lastpos: 0, turn: ''});
            }
        }    
        // eslint-disable-next-line
    }, [playermoves]);

    // Start Game
    const startGame = () => {
        // Reset Game Moves
        resetGameMoves('');
        // Reset Player Moves
        resetPlayerMoves('');
        // First Move
        addGameMove();
        
        setGameStatus({state: 'START', lastpos: 0, turn: 'GAME'});
    }

    return(
        <GameContext.Provider
            value={{
                gameStatus,
                gameScore,
                gamemoves,
                addPlayerMove,
                setGameStatus,
                startGame
            }}
        >
            { props.children }
        </GameContext.Provider>
    )

}

export default GameProvider;
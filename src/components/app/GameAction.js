import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext';

export const GameAction = () => {
    
    const { gameStatus, startGame } = useContext(GameContext);
    const { state } = gameStatus;

    const handleStartButton = () => {
        startGame();
    }

    return (
        <div>
            {
                (state !== "START") &&
                (
                <div className="panel-action">
                    <button onClick={ handleStartButton } className="panel-button button-green">Start</button>       
                </div> 
                )     
            }
        </div>
    )
}

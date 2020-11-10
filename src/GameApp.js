import React from 'react'
import { Board } from './components/app/Board';
import GameProvider from './context/GameContext';

export const GameApp = () => {
    return (
        <GameProvider>
            <Board />
        </GameProvider>
    )
}

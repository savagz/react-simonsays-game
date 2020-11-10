import React from 'react'
import { GamePanel } from './GamePanel'
import { ScorePanel } from './ScorePanel'

export const Board = () => {
    return (
        <div className="board-wrapper">
            <GamePanel />
            <ScorePanel />
        </div>
    )
}

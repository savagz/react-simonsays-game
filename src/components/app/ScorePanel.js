import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import { GameContext } from '../../context/GameContext';

export const ScorePanel = () => {

    const { gameScore } = useContext(GameContext);
    const { level, score } = gameScore;
    
    const handleInfoButton = () => {
        Swal.fire({
            title: 'React Says',
            text: `Based on Simon Says Game. Developed by: Samuel Vargas. © 2020`,
            icon: 'info'
        });
    }

    return (
        <div className="score-panel">
            <div className="panel-name">Moves</div>
            <div className="panel-score">{ score }</div>
            <div className="panel-current-box">
                <div className="panel-current-label">Level</div>
                <div className="panel-current-score">{ level }</div>
            </div>
            <div className="panel-action">
                <button onClick={ handleInfoButton } className="panel-button">Info</button>       
            </div>
        </div> 
    )
}

import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../context/GameContext';

export const GamePlayer = () => {

    const [name, setName] = useState('React Says');

    const { gameStatus } = useContext(GameContext);
    const { state, turn } = gameStatus;

    useEffect(() => {
        if(state === "START"){
            turn === 'GAME' ? setName('My Turn...') : setName('Your Turn...');
        } else {
            state === 'STOP' ? setName('GAME OVER') : setName('REACT SAYS');
        }
    }, [state, turn])

    return (
        <div className="panel-name">{ name }</div>
    )
}

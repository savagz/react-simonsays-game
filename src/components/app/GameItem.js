import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../context/GameContext';

export const GameItem = ({position}) => {

    const [ divclass, setDivclass ] = useState(`items item${position}`);

    const { gameStatus, addPlayerMove } = useContext(GameContext);
    const { state, lastpos, turn } = gameStatus;
    
    useEffect(() => {
        // Demo 
        if(state === 'DEMO'){
            setDivclass(lastpos === Number(position) ? `items item${position} item-led${position}` : `items item${position}`);
            return;
        }

        // Player Active Item
        if(turn === 'PLAYER'){
            setDivclass(`items item${position} itembase pointer`);
            return; 
        }

        // Show Game Moves 
        if(state === 'START'){
            setDivclass(lastpos === Number(position) ? `items item${position} item-led${position}` : `items item${position} itembase`);
            return;
        }
        // eslint-disable-next-line
    }, [lastpos])

    // Click Select Player Move
    const handlePushItem = () => {
        turn === 'PLAYER' && addPlayerMove(position);
    };

    const handleItemDown = () => {
        turn === 'PLAYER' && setDivclass(`items item${position} item-led${position} pointer`);
    };

    const handleItemUp = () => {
        turn === 'PLAYER' && setDivclass(`items item${position} itembase pointer`);
    };

    return (
        <div 
            className={ divclass }
            onClick={ handlePushItem }
            onMouseDown={ handleItemDown }
            onMouseUp={ handleItemUp }
        >
        </div>
    )
}

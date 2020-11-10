import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../context/GameContext';
import { GameAction } from './GameAction';
import { GameItem } from './GameItem';
import { GamePlayer } from './GamePlayer';

export const GamePanel = () => {

    const [position, setPosition] = useState(0);

    const { gameStatus, gamemoves, setGameStatus } = useContext(GameContext);
    const { state, lastpos, turn } = gameStatus;

    useEffect(() => {
        if(state === "DEMO"){
            const timeout = setTimeout(() => {  
                (state === "DEMO") && setGameStatus({ ...gameStatus, lastpos: ( lastpos === 4 ? 1 : lastpos + 1 ) });
            }, 2000);
            return () => clearTimeout(timeout);
        }
        // eslint-disable-next-line 
    }, [state, lastpos]);

    useEffect(() => {
        if(state === "DEMO" || turn === "PLAYER") return;

        let gamearr = [...gamemoves];        
        if( position <= gamearr.length ){
            const timeout = setTimeout(() => { 
                setGameStatus({ ...gameStatus, lastpos: Number(gamearr[position]) });
                setPosition(position+1);
            }, 2000);
            return () => clearTimeout(timeout);
        } else {
            setGameStatus({ ...gameStatus, lastpos: 0, turn: 'PLAYER' });
            setPosition(0);
        }
        // eslint-disable-next-line 
    }, [gamemoves, lastpos, position]);
    
    return (
        <div className="game-panel">
            <GamePlayer />
            <div className="panel-box">
                <div className="board-container">
                    <GameItem key="1" position="1" />
                    <GameItem key="2" position="2" />
                    <GameItem key="3" position="3" />
                    <GameItem key="4" position="4" />
                    <div className="center"></div>
                </div>
            </div>
            <GameAction />
        </div>
    )
}

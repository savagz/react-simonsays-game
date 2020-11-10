import { useState } from 'react';

export const useMoves = (initialValue = '') => {
    const [move, setMove] = useState(initialValue);
  
    const addAutoMove = () => {
        setMove( `${ move }${ Math.floor(Math.random() * Math.floor(4)) + 1 }` );
    };
    
    const addManualMove = (newmove) => {
        setMove( `${ move }${ newmove }` );
    };

    const resetMove = (moves) => {
        setMove(moves);
    }

    return [ move, addAutoMove, addManualMove, resetMove ];
}
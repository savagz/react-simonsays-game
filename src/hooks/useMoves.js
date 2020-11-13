import { useState } from 'react';

export const useMoves = (initialValue = '') => {
    const [move, setMove] = useState(initialValue);
  
    const addAutoMove = (previous) => {
        let next = Math.floor(Math.random() * Math.floor(4)) + 1; 
        console.log('Prevoius : '+previous+" Next: "+next);
        while (previous === next) {
            next = Math.floor(Math.random() * Math.floor(4)) + 1; 
        }
        setMove( `${ move }${ next }` );
    };
    
    const addManualMove = (newmove) => {
        setMove( `${ move }${ newmove }` );
    };

    const resetMove = (moves) => {
        setMove(moves);
    }

    return [ move, addAutoMove, addManualMove, resetMove ];
}
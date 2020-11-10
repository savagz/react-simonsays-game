export function getGameStatus(){
    const status = {
        level: 0, 
        score: 0, 
        state: 'DEMO',
        lastpos: 0,
        turn: ''
    };
    return status;
}

export function getGameScore(){
    const status = {
        level: 0, 
        score: 0
    };
    return status;
}
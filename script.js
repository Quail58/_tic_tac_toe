// module to stoe the gameboard
const gameBoard = (function(){
    //matrix for the board
    let _board = [
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ];
    const grid = document.getElementById('board');

    const makeGrid = () => {       
        for (i = 0; i < 9; i++){
            cell = document.createElement("div");
            cell.setAttribute('id', 'tacbox');
            if (i <=2 ){
                cell.setAttribute('class', _board[0][i]);
            } else if (i >=3 && i < 6){
                cell.setAttribute('class', _board[1][i-3]);
            } else {
                cell.setAttribute('class', _board[2][i-6]);
            }       
            grid.appendChild(cell);
        } 
    }

    return {
        makeGrid
    }    
})();

console.log(gameBoard.makeGrid());

// factory function to make the player
const Player = (name, symbol) => {

}
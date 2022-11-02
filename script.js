// module to store the gameboard
const gameBoard = (function(){
    //matrix for the board
    let _board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    const grid = document.getElementById('board');

    //makes a grid for the gameboard
    const makeGrid = () => {       
        for (i = 0; i < 9; i++){
            cell = document.createElement("button");
            cell.setAttribute('id', 'tacbox');
            // checks for the first array
            if (i <=2 ){
                //sets to empty if its not "X" or "O"
                if (_board[0][i] == 0) {
                    cell.innterHTML= ""
                } else {
                    cell.setAttribute('class', _board[0][i]);
                    cell.innerHTML = _board[0][i];
                }
            // checks for the second array
            } else if (i >=3 && i < 6){
                //sets to empty if its not "X" or "O"
                if (_board[1][i-3] == 0) {
                    cell.innterHTML= ""
                } else {
                    cell.setAttribute('class', _board[1][i-3]);
                    cell.innerHTML = _board[1][i-3];
                }
            // defaults to the third array                
            } else {
                //sets to empty if its not "X" or "O"
                if (_board[2][i-6] == 0) {
                    cell.innterHTML= ""
                } else {
                    cell.setAttribute('class', _board[2][i-6]);
                    cell.innerHTML = _board[2][i-6];
                }  
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


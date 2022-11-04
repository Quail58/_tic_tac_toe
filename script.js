// module to store the gameboard
const gameBoard = (() => {
    //matrix for the board
    let _board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    //creates the grid
    const _grid = document.getElementById('board');
    let _counter = 0;
    const X = "X"
    const O = "O"

    //makes a grid for the gameboard
    function makeGrid(){       
        for (i = 0; i < 9; i++){           
            cell = document.createElement("button");
            cell.setAttribute('class', i);
            cell.addEventListener('click', function changeSymbol() {
                if (_counter % 2 == 0){
                    this.innerHTML = 'X';
                    this.disabled = true;
                    _counter++;
                    console.log(_board);
                    console.log()
                    if (this.className <= 2){
                        _board[0][this.classname] = 1;
                    }
                } else {
                    this.innerHTML = 'O';
                    this.disabled = true;
                    _counter++;
                    console.log(_board);              
                }                
            });     
            _grid.appendChild(cell);
        } 
    }
    
    //function to compare the values of the array
    function _checkWin() {
        //checks across
        if (_board[0][0] == _board[0][1] && _board[0][0] == _board[0][2] || _board[1][0] == _board[1][1] && _board[1][0] == _board[1][2] || _board[2][0] == _board[2][1] && _board[2][0] == _board[2][2]){

        
        //checks up and down
        } else if(_board[0][0] == _board[1][0] && _board[0][0] == _board[2][0] || _board[0][1] == _board[1][1] && _board[0][1] == _board[2][1] || _board[0][2] == _board[1][2] && _board[0][2] == _board[2][2]) {


        //checks diagonal
        } else if(_board[0][0] == _board[1][1] && _board[0][0] == _board[2][2] || _board[0][2] == _board[1][1] && _board[0][2] == _board[2][0]) {


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

// module to control the flow of the game
const playGame = () => {

}
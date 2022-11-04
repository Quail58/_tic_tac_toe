// module to store the gameboard
const gameBoard = (() => {
    //matrix for the board
    let _board = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    //creates the grid
    const _grid = document.getElementById('board');
    let _counter = 0;

    //function to compare the values of the array
    function _checkWin() {
        //checks across
        if (_board[0][0] == _board[0][1] && _board[0][0] == _board[0][2] || _board[1][0] == _board[1][1] && _board[1][0] == _board[1][2] || _board[2][0] == _board[2][1] && _board[2][0] == _board[2][2]){
            console.log("win!")
        
        //checks up and down
        } else if(_board[0][0] == _board[1][0] && _board[0][0] == _board[2][0] || _board[0][1] == _board[1][1] && _board[0][1] == _board[2][1] || _board[0][2] == _board[1][2] && _board[0][2] == _board[2][2]) {
            console.log("win!")

        //checks diagonal
        } else if(_board[0][0] == _board[1][1] && _board[0][0] == _board[2][2] || _board[0][2] == _board[1][1] && _board[0][2] == _board[2][0]) {
            console.log("win!")
        }
    }

    //makes a grid for the gameboard
    function makeGrid(){       
        for (i = 0; i < 9; i++){         
            cell = document.createElement("button");
            cell.setAttribute('class', i);
            cell.addEventListener('click', function changeSymbol() {

                //replaces token slot with "X"
                if (_counter % 2 == 0){
                    tokenSet = this.className;
                    tokenSetTwo = this.className - 3;
                    tokenSetThree = this.className - 6;
                    this.innerHTML = 'X';
                    this.disabled = true;
                    _counter++;
                    //changes the array
                    if (tokenSet <= 2){ 
                        _board[0].splice(tokenSet, 1, "X");
                        _checkWin();
                    } else if(tokenSet > 2 && tokenSet < 6) {
                        _board[1].splice(tokenSetTwo, 1, "X");
                        _checkWin();                        
                    } else{
                        _board[2].splice(tokenSetThree, 1, "X");
                        _checkWin();
                    }

                //replaces token slot with "0" 
                } else {
                    tokenSet = this.className;
                    tokenSetTwo = this.className - 3;
                    tokenSetThree = this.className - 6;
                    this.innerHTML = 'O';
                    this.disabled = true;
                    _counter++;
                    console.log(_board);
                    console.log(this.className)
                    //changes the array
                    if (tokenSet <= 2){ 
                        _board[0].splice(tokenSet, 1, "O");
                        _checkWin();
                    } else if(tokenSet > 2 && tokenSet < 6) {
                        _board[1].splice(tokenSetTwo, 1, "O");
                        _checkWin();                        
                    } else{
                        _board[2].splice(tokenSetThree, 1, "O");
                        _checkWin();
                    }              
                }                
            });     
            _grid.appendChild(cell);
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
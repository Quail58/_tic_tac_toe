// module to store the gameboard
const gameBoard = (() => {
    let gameOn = true;
    //matrix for the board
    let _board = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];



    //creates the grid
    const _grid = document.getElementById('middle');
    const _bottom = document.getElementById('bottom');
    const _turn = document.getElementById('turn');
    let _counter = 0;
    let playCount = 0;
    //function to create win screen
    function _winScreen(token){
        const winTitle = document.createElement('div');
        winTitle.setAttribute('class', 'win');
        winTitle.innerHTML = token;
        _bottom.appendChild(winTitle);
        const resetButton = document.createElement('button');
        resetButton.innerHTML = "Play Again?";
        resetButton.onclick = function() {
            while(_grid.firstChild){
                _grid.removeChild(_grid.lastChild);
              }
              gameOn = true;
              
              _board[0].splice(0, 3, 1, 2, 3);
              _board[1].splice(0, 3, 4, 5, 6);
              _board[2].splice(0, 3, 7, 8, 9);
              makeGrid();
              resetButton.remove();
              winTitle.remove();
              playCount = 0;              
            }            
        ;
        _bottom.appendChild(resetButton);
    }

    // function clearBoard() {
    //     while(_grid.firstChild){
    //       _grid.removeChild(_grid.lastChild);
    //     }
    //     makeGrid();
    //   }


    function resetBoard() {
        deleteBoard = document.getElementById('board');
        deleteBoard.remove;
        makeGrid();
        };

    //function to compare the values of the array
    function _checkWin() {
        //checks across
        if (_board[0][0] == _board[0][1] && _board[0][0] == _board[0][2]){
            if (_board[0][0] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }
        } else if(_board[1][0] == _board[1][1] && _board[1][0] == _board[1][2]) {
            if (_board[1][0] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }

        } else if(_board[2][0] == _board[2][1] && _board[2][0] == _board[2][2]) {
            if (_board[2][0] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }

        } else if(_board[0][0] == _board[1][0] && _board[0][0] == _board[2][0]) {
            if (_board[0][0] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }

        } else if(_board[0][1] == _board[1][1] && _board[0][1] == _board[2][1]){
            if (_board[0][1] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }

        } else if(_board[0][2] == _board[1][2] && _board[0][2] == _board[2][2]){
            if (_board[0][2] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }

        }else if(_board[0][0] == _board[1][1] && _board[0][0] == _board[2][2]) {
            if (_board[0][0] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }
            
        } else if(_board[0][2] == _board[1][1] && _board[0][2] == _board[2][0]){
            if (_board[0][2] == 'X'){
                _winScreen('X wins!');
                gameOn = false;                
            } else {
                _winScreen('O wins!');
                gameOn = false;
            }

        } else if(playCount == 9){
            _winScreen("It's a tie!")
        }
    }

    //makes a grid for the gameboard
    function makeGrid(){
        createBoard = document.createElement('div');
        createBoard.setAttribute('id', 'board');
        _grid.appendChild(createBoard);        
        for (i = 0; i < 9; i++){        
            cell = document.createElement("button");
            cell.setAttribute('class', i);
            cell.setAttribute('id', 'gridChild')
            cell.addEventListener('click', function changeSymbol() {
            //runs the game if its playing
            if(gameOn == true){
                //replaces token slot with "X"
                if (_counter % 2 == 0){
                    tokenSet = this.className;
                    tokenSetTwo = this.className - 3;
                    tokenSetThree = this.className - 6;
                    this.innerHTML = 'X';
                    this.disabled = true;
                    _counter++;
                    playCount++;
                    _turn.innerHTML = "O's turn";
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
                    playCount++;
                    _turn.innerHTML = "X's turn";
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
            //stops the game if its not playing
            }               
            });     
            createBoard.appendChild(cell);
        } 
    }
    //returns the makegrid to global
    return {
        makeGrid
    }    
})();

console.log(gameBoard.makeGrid());

// module to store the gameboard
const gameBoard = (() => {
    //matrix for the board
    let _board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    //creates the grid
    const grid = document.getElementById('board');
    let counter = 0;

    //makes a grid for the gameboard
    function makeGrid(){       
        for (i = 0; i < 9; i++){           
            cell = document.createElement("button");
            cell.setAttribute('class', i+1);
            cell.addEventListener('click', function changeSymbol() {
                if (counter % 2 == 0){
                    this.innerHTML = 'X';
                    counter++;
                } else {
                    this.innerHTML = 'O';
                    counter++;              
                }                
            });     
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

// module to control the flow of the game
const playGame = () => {

}
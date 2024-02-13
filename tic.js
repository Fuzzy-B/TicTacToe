let state = ['', '', '', '', '', '','', '', '',]
let currentPlayer = "X"

const playerturn = document.querySelector("h4")
const reset = document.querySelector("button")
const squares = document.getElementsByClassName('cell')
 
// -need to add event listeners for square click add players symobol (X, O)
for (let i=0;i<squares.length;i++) {
    squares[i].addEventListener("click", (event) => {
        if (state[i] !== ''){
            alert('that square is Taken!') 
            return
        }
        state[i] = currentPlayer
        checkWin()
        render()   
    })
}



//     -need to alternate player turns
function playerTurn () {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else { 
        currentPlayer = "X"
    } 
    
}


//     -need to add winning conditions, tie
function checkWin () {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6] 
    ]

    for (let condition of winConditions) {
        const [a, b, c] = condition
        if (state[a] && state[a] === state[b] && state[a] === state[c]) {
            alert(`Player ${currentPlayer} wins!!!`)
            return 
        }    
    }
 
    if (state.every(square => square !== '')) {
        alert('Well played, it is a tie!')
    }
}


//     -reset button
reset.addEventListener('click', ()=> {
    for (let i = 0; i < state.length; i++) {
        state[i] = '';
    }
    render()
})

//render
function render() {
     
    for(i=0;i<state.length;i++) { 
         
        squares[i].textContent = state[i]
    } 
    playerTurn()
    playerturn.textContent = `${currentPlayer}`  
}
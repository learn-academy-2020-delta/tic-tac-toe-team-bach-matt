import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [...Array(9).fill(" ")],
      currentPlayer: 1,
      winner: null,
    }
  }
  
  //get indexes of all X so we have a new array of the index[X] and compare to winCondition
  winCheck = (squares) => {
    let { winner } = this.state
    // possible win condition index combinations
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8]
    ]
    // go through all subarrays of the win conditions
    for (let i = 0; i < winConditions.length; i++) {
      // destructor the values at each subarray to simply a, b, c
      const [a, b, c] = winConditions[i]
      // check if the symbol of 'X' or 'O' is the same at locations a, b, and c
      // if the same symbol is found in the given winning conditions, then return the winner symbol
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(`winner: ${squares[a]}`)
        return this.winnerMessage(squares[a])
      } else if (!squares.includes(" ") && winner === null) {
        return this.setState({winner: "*meow* 🙀 CATS GAME."})
      }
    }
    return null
  }

  handleChange = (i) => {
    let { squares, currentPlayer} = this.state
    if(squares[i] !== " " ){
      console.log("bailed early")
      return 
    } else if (currentPlayer === 0 ) {
      squares[i] = "O"
      // call functin
      this.winCheck(squares)
      currentPlayer = 1 
    } else {
      squares[i] = "X"
      this.winCheck(squares)
      currentPlayer = 0
    }
    // console.log(`current player: ${currentPlayer}`)
    // console.log(`squares array: ${squares}`)
    this.setState({squares: squares, currentPlayer: currentPlayer})
  }

  winnerMessage = (win) => {
    // console.log(`squares array: ${squares}`)
    if (win === 'X') {
      this.setState({winner: "X is the WINNER!"})
    } else if (win === 'O') {
      this.setState({winner: "O is the WINNER!"})
    }
  }

  handleRestart = () => {
    window.location.reload()
  }

  render(){
    let { squares } = this.state
    let grid = squares.map((square, index) => {
      return (
        <Square 
        handleChange = { this.handleChange }
        square = { square }
        index = { index }
        key = { index }
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <h2> { this.state.winner !== null? this.state.winner : `Current Player : ${this.state.currentPlayer === 1? "X" : "O"}` }</h2>
        <div id="gameBoard">
          { grid }
        </div>
        <button
          id="restart-button"
          onClick = {this.handleRestart}>Restart Game</button>
      </React.Fragment>
    )
  }
}
export default App

import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [...Array(9).fill(" ")],
      currentPlayer: 1
    }
  }

  handleChange = (i) => {
    let { squares, currentPlayer } = this.state
    if(squares[i] !== " " ){
      console.log(currentPlayer)
      console.log("bailed early")
      return 
    } else if (currentPlayer === 0) {
      squares[i] = "O"
      currentPlayer = 1 
    } else {
      squares[i] = "X"
      currentPlayer = 0
    }
    console.log(currentPlayer)
    console.log(squares)
    this.setState({squares: squares, currentPlayer: currentPlayer})
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
        <div id="gameBoard">
          { grid }
        </div>
      </React.Fragment>
    )
  }
}
export default App

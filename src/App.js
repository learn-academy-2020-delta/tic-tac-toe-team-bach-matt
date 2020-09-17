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
  winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]
//get indexes of all X so we have a new array of the index[X] and compare to winCondition
  winCheck = (squares) => {
    //filter through array and get index
    let onlyXs = squares.map((square, index)  => {
      if(square === "X") {
        return index
      } 
    }).filter(value => typeof value === "number")
    console.log(onlyXs)
    return onlyXs
  }
    
    //if the index of Xs matches any winConditions alert "You won"
  //   if(squar)
  // }

  handleChange = (i) => {
    let { squares, currentPlayer } = this.state
    if(squares[i] !== " " ){
      console.log(currentPlayer)
      console.log("bailed early")
      return 
    } else if (currentPlayer === 0 ) {
      squares[i] = "O"
      // call functin
      currentPlayer = 1 
    } else {
      squares[i] = "X"
      this.winCheck(squares)
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

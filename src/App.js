import './App.css';
import Gameboard from './components/Gameboard';
import { useState } from 'react';
import './STYLES/Global.scss'
import { calculateWinner } from './helper';
function App() {
  const [gameboard, setgameboard] = useState(Array(9).fill(null))
  const [zero, setzero] = useState(false)
  const winner = calculateWinner(gameboard)
  const message = winner ? `Winner is ${winner}`: `Next Player ${zero?'X':'0'}`
console.log(winner)

  console.log(gameboard)
  const handleclick = (position) => {

    if (gameboard[position] || winner) {  //if board position exist then return this code is written because it will dont allow to overwrite on it
      return;
    }
    setgameboard((previous) => {
      return previous.map((square, pos) => {
        if (pos === position)   //map has its own index value so that it can compare index value with position of square
        {
          return zero ? 'X' : '0'
        }
        return square    //returning the values
      })
    })
    setzero((previous) => !previous) //this statement will make true for zero and then again false
  }
  return (
    <div className="container">
      <h1>TIC TOE GAME</h1>
      <h2>{message}</h2>
      <Gameboard gameboard={gameboard} handleclick={handleclick} />
    </div>
  );
}

export default App;


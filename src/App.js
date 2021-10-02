import './App.css';
import Gameboard from './components/Gameboard';
import { useState } from 'react';
import './STYLES/Global.scss'
import Histroy from './components/Histroy';
import { calculateWinner } from './helper';
import Statusmessage from './components/Statusmessage';
function App() {



  // first use this two logic and then go ahead 
  // const [gameboard, setgameboard] = useState(Array(9).fill(null))
  // const [zero, setzero] = useState(false) 
  
  

  // after using the first logic slightly change logic for history process
  const [history, sethistory] = useState(
    [
      {  //creating array objects
        gameboard: Array(9).fill(null),
        zero: true
      }
    ]
  )


  const [currentmove, setcurrentmove] = useState(0)
  const current = history[currentmove]   //state of the game
  const winner = calculateWinner(current.gameboard)
  console.log(current.gameboard)



  const handleclick = (position) => {

    if (current.gameboard[position] || winner) {  
    //if board position exist then return this code is written because it will dont allow to overwrite on it
      return;
    }
    // setgameboard((previous) => {  previously it was this 
    sethistory((previous) => {
      const last = previous[previous.length - 1] 
      //it will give last element in this previous array



      // return previous.map((square, pos) => {  //it was this before mapping the previous value
      const newboard = last.gameboard.map((square, pos) => {
        if (pos === position)   
        //map has its own index value so that it can compare index value with position of square
        {
          // return current.zero ? 'X' : '0' it is giving the x and 0 in the previous solution previously it was state 
          return last.zero ? 'X' : '0'   
          //but now it is state array object
        }
        return square    
        //returning the values
      })
      return previous.concat({gameboard: newboard, zero:!last.zero}) //changing the zero boolean value
    })
    // setzero((previous) => !previous) //this statement will make true for zero and then again false
    setcurrentmove(previous=>previous+1)
  }

  const moveto = (move) =>{
    setcurrentmove(move);
  }
  return (
    <div className="container">
      <h1>TIC TOE GAME</h1>
      <Statusmessage winner={winner} current={current}/>
      <Gameboard gameboard={current.gameboard} handleclick={handleclick} />
      <Histroy history={history} moveto={moveto} currentmove={currentmove}/>
    </div>
  );
}
export default App;


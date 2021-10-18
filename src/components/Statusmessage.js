import React from 'react'

const Statusmessage = ({winner,current}) => {
//   const message = winner ? `Winner is ${winner}` : `Next Player turn ${current.zero ? 'X' : '0'}`
//   console.log(winner)
const nomovesleft = current.gameboard.every((el)=>el !==null)
    return (
        <div className="status-message">
          { winner && 
          <>
          Winner is <span className={winner === 'X'? 'text-green':'text-orange'}>{winner}</span>  {/* 1st condition if we get the winner it will display it */}
          </>
        }  
          { !winner && !nomovesleft && 
          <>
          Next Player turn <span className={current.zero ? 'text-green':'text-orange'}>{current.zero ? 'X' : '0'}{' '}</span>
          </>
          } {/* 2nd condition is to have the turn of users x and 0 */}
          { !winner && nomovesleft && <>
          <span className="text-green">X</span>and <span className="text-orange">0 </span>Tied
          </>} {/* 3rd condition if we didnt get the winner then it show tied*/}
        </div>
    )
}

export default Statusmessage

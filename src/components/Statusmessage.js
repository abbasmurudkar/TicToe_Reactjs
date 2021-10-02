import React from 'react'

const Statusmessage = ({winner,current}) => {
//   const message = winner ? `Winner is ${winner}` : `Next Player turn ${current.zero ? 'X' : '0'}`
//   console.log(winner)
const nomovesleft = current.gameboard.every((el)=>el !==null)
    return (
        <h2>
          { winner && `Winner is ${winner}` }   {/* 1st condition if we get the winner it will display it */}
          { !winner && !nomovesleft && `Next Player turn ${current.zero ? 'X' : '0'}`} {/* 2nd condition is to have the turn of users x and 0 */}
          { !winner && nomovesleft && 'X and 0 Tied'} {/* 3rd condition if we didnt get the winner then it show tied*/}
        </h2>
    )
}

export default Statusmessage

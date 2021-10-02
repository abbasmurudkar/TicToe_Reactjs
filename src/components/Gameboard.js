import React, { useState } from 'react'
import Square from './Square'

function Gameboard() {
    const [gameboard, setgameboard] = useState(Array(9).fill(null))
    const [zero, setzero] = useState(false)
    console.log(gameboard)
    const handleclick = (position) => {

        if (gameboard[position]) {
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

    const rendersquare = (position) => {
        return <Square value={gameboard[position]} update={() => { handleclick(position) }} />  /* if we directly put the function while using props it will immediately execute for that use arrow function like this so that it works proper*/
    }
    return (
        <div className="board">
            <div className="board-rows">
                {rendersquare(0)}
                {rendersquare(1)}
                {rendersquare(2)}
            </div>
            <div className="board-rows">
                {rendersquare(3)}
                {rendersquare(4)}
                {rendersquare(5)}
            </div>
            <div className="board-rows">
                {rendersquare(6)}
                {rendersquare(7)}
                {rendersquare(8)}
            </div>
        </div>
    )
}

export default Gameboard;


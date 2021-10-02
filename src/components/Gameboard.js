import React from 'react'
import Square from './Square'

function Gameboard() {
    return (
        <div className="board">
            <div className="board-rows">
                <Square value={0}/>
                <Square value={1}/>
                <Square value={2}/>
            </div>
            <div className="board-rows">
                <Square value={3}/>
                <Square value={4}/>
                <Square value={5}/>
            </div>
            <div className="board-rows">
                <Square value={6}/>
                <Square value={7}/>
                <Square value={8}/>
            </div>
        </div>
    )
}

export default Gameboard;


import React from 'react'
import Square from './Square'

function Gameboard() {
    return (
        <div className="container">
            <div className="rows">
                <Square value={0}/>
                <Square value={1}/>
                <Square value={2}/>
                {/* <Square>
                    <p>hello guys can you play the game</p>   //children tag 
                </Square> */}
            </div>
            <div className="rows">
                <Square value={3}/>
                <Square value={4}/>
                <Square value={5}/>
            </div>
            <div className="rows">
                <Square value={6}/>
                <Square value={7}/>
                <Square value={8}/>
            </div>

        </div>
    )
}

export default Gameboard

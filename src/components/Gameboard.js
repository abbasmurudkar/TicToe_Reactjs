import React from 'react'
import Square from './Square'

function Gameboard() {
    return (
        <div className="container">
            <div className="rows">
                <Square value={0}/>
                <Square value={1}/>
                <Square value={2}/>
            </div>
            <div className="rows">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="rows">
                <Square/>
                <Square/>
                <Square/>
            </div>

        </div>
    )
}

export default Gameboard

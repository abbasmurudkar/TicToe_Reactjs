import Square from './Square'

function Gameboard({gameboard,handleclick,winningsquares}) {

    const rendersquare = (position) => {
        const iswinningsquare = winningsquares.includes(position)
        return <Square value={gameboard[position]} update={() => { handleclick(position)}} iswinningsquare={iswinningsquare} />  
        /* if we directly put the function while using props it will immediately execute for that use arrow function 
        like this so that it works proper*/
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


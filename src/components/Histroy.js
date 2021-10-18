import React from 'react'

const Histroy = ({ history , moveto, currentmove}) => {
    return (
        <div className="history-wrapper">
        <ul className="history">
            {
                history.map((_,index) => {
                    return (
                        <li key={index}> {/* unique key for array */}
                            <button className={`btn-move ${index===currentmove ? 'active':''}`} type="button" onClick={()=>{moveto(index)}}>{ index === 0?"go to game to start":`go to move #${index}` }</button>
                        </li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default Histroy

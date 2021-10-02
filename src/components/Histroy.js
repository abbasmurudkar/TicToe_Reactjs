import React from 'react'

const Histroy = ({ history , moveto, currentmove}) => {
    return (
        <ul>
            {
                history.map((_,index) => {
                    return (
                        <li key={index}>
                            <button style={{fontWeight: index===currentmove ? 'bold':'normal'}}type="button" onClick={()=>{moveto(index)}}>{ index === 0?"go to game to start":`go to move ${index}` }</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Histroy

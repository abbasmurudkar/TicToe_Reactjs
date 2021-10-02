import React from 'react'

function Square({value , children,update}) { //the children tag is use when the component is taking another info from gameboard like p tag and to have that tag from gameboard in square we will use children tag
    return (
      <button type="button" className="square" onClick={update}>{value}</button>
       
    )
}

export default Square

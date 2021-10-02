import React from 'react'

function Square({ value, children, update, iswinningsquare}) { //the children tag is use when the component is taking another info from gameboard like p tag and to have that tag from gameboard in square we will use children tag
  return (
    <button type="button" className="square" style={{fontWeight: iswinningsquare?'bold':'normal'}}onClick={update}>{value}</button>

  )
}

export default Square

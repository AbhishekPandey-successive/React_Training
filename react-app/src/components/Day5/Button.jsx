import React from 'react'

function Button({onClickHandler,color,count}) {
  return (
    <div>
      <button onClick={onClickHandler} style={{color:color}}>{count}</button>
    </div>
  )
}

export default Button

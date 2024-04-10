import React, { useState } from 'react'
import withLogger from './withLogger'

function HOCApp2({Increment,count}) {
   
  return (
    <div>
      {count}
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default withLogger(HOCApp2)

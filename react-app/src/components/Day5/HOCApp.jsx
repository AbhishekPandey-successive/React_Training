import React from 'react'
import withDataFetching from './withDataFetching'


function HOCApp({newarray}) {
  return (
    <div>
      <ul>
        {
            newarray.map((item)=>
            <li key={item.id}>{item.body}</li>)
        }
      </ul>
    </div>
  )
}

export default withDataFetching(HOCApp)

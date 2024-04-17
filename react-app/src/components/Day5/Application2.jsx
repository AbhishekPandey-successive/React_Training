import React,{useState} from 'react'
import Button from './Button'

function Application2() {
    const [count,setCount]=useState(0)
    function onClickHandler()
    {
        setCount(count+1)
    }
  return (
    <div>
       <Button color={"blue"} onClickHandler={onClickHandler} count={count}/>
    </div>
  )
}

export default Application2
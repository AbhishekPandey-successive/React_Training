// Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it. Write tests using React Testing Library to ensure that the component behaves as expected.



import React,{useState} from 'react'

function Count() {
    const [count,setCount]=useState(0);
  return (
    <div>
     count:{count}
     <button onClick={()=>setCount(count+1)}>Increement</button>
     <button onClick={()=>setCount(count-1)}>Decreement</button>
     
      
    </div>
  )
}

export default Count

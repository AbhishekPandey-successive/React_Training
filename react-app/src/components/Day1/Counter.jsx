import React ,{useState} from "react"

function Counter()
{
    let [count,setCount]=useState(0);
    function Increement()
    {
        setCount(count++);
    }

    function Decreement()
    {
        setCount(count--);
    }

    return(
        <>
            {count}
            
            <div >
            <button onClick={Increement} style={{margin:'10px'}}>Increement</button>
            <button onClick={Decreement} style={{margin:'10px'}}> Decreement</button>
            </div>
        </>
    )
}

export default Counter



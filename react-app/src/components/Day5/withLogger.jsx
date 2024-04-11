import React, { useEffect, useState } from 'react'


function withLogger(OriginalComponent) {

    function NewComponent()
    {
        const [count,setCount]=useState(1)
        function Increment()
        {
            setCount(count+1)
        }

        useEffect(()=>{
            console.log("component Mount")

            if(count>0)
            {
                console.log("Component Updating")
            }

            return ()=>{
                console.log("Component Unmount")
            }
        },[count])

        return <OriginalComponent Increment={Increment} count={count}/>
    }

    return NewComponent
 
}

export default withLogger

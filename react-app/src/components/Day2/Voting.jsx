// Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.


import React,{useReducer} from 'react'
const intialstate=0;
const reducer=(state,action)=>{
    switch(action)
    {
        case "increement":
            return state+1;

        case "decreement":
            return state-1;

        default:
            return 0;
    }
}

function Voting() {
    const [party1,dispatch1]=useReducer(reducer,intialstate)
    const [party2,dispatch2]=useReducer(reducer,intialstate)
    const [party3,dispatch3]=useReducer(reducer,intialstate)

  return (
    <>
    <div>
   votes for Party1: {party1}
   <button onClick={()=>dispatch1("increement")}>increement</button>
   <button onClick={()=>dispatch1("decreement")}>decreement</button>
   <button onClick={()=>dispatch1("Reset")}>Reset</button>
      
    </div>



    <div>
   votes for Party2: {party2}
   <button onClick={()=>dispatch2("increement")}>increement</button>
   <button onClick={()=>dispatch2("decreement")}>decreement</button>
   <button onClick={()=>dispatch2("Reset")}>Reset</button>
      
    </div>



    <div>
   votes for Party3: {party3}
   <button onClick={()=>dispatch3("increement")}>increement</button>
   <button onClick={()=>dispatch3("decreement")}>decreement</button>
   <button onClick={()=>dispatch3("Reset")}>Reset</button>
      
    </div>

    </>
  )
}

export default Voting

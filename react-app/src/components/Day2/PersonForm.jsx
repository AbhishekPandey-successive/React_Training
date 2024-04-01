import React,{useState} from "react";
function PersonForm()
{
    let [firstName,setfirstName]=useState("");
    let [lastName,setlastName]=useState("");
    let [age,setAge]=useState();

    function updateName(e)
    {
     setfirstName(e.target.value)
    }


    function updatelastName(e)
    {
     setlastName(e.target.value)
    }

    function updateAge(e)
    {
        setAge(e.target.value)
    }


    return(
        <>
            <h1>Input Field Value</h1>
           
            <input type="text" onChange={updateName} placeholder="Enter First Name" />
            <br/>
            {firstName}
            <br/>

            
            <input type="text" onChange={updatelastName} placeholder="Enter Last Name"/>
            <br/>
            {lastName}
            <br/>

            
            <input type="Number" onChange={updateAge}  placeholder="Enter Age"/>
            <br/>
            {age}
        </>
    )
}

export default PersonForm
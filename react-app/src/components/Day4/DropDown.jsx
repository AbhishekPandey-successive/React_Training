// 5.Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.


import React,{useState} from 'react'

function DropDown() {
    const [data,setdata]=useState("")
    const [display,setDisplay]=useState("")

    function updateData(e)
    {
      setdata(e.target.value)
      setDisplay(data)
    }
  return (
    <div>
    <select>
  <option value={data} onChange={updateData}> option1</option>
  <option value={data} onChange={updateData}>option2</option>
  <option value={data} onChange={updateData}>option3</option>
  <option value={data} onChange={updateData}>option4</option>
  <option value={data} onChange={updateData}>option5</option>
    </select>

   {display}
    </div>
  )
}

export default DropDown

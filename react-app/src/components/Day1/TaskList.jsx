function TaskList(props)
{
    const listItems=props.array.map((value)=>{
        return <li>{value}</li>
    })

    return (
        <>
        {listItems}
        </>
       
    )

}

export default TaskList
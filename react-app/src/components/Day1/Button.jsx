function Button(props)
{
    return(
        <button style={{color:props.color,border:'2px solid black'}}>{props.text}</button>
    )
}

export default Button

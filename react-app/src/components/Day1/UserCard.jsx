
function UserCard(props)
{
    const {name,email}=props

    return(
        <>
            "Name is :" {name}
            <br/>
            "email is :" {email}
            <br/>
            
            <img src={window.location.origin + '/one.png'} alt="new" style={{height:'100px'}}/>
        </>
    )

}

export default UserCard
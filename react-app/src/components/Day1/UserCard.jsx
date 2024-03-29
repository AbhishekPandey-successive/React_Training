import onepng from './one.png'
function UserCard(props)
{
    const {name,email}=props

    return(
        <>
            "Name is :" {name}
            <br/>
            "email is :" {email}
            <br/>
            <img src={onepng} alt="new" style={{height:'100px'}}/>
        </>
    )

}

export default UserCard
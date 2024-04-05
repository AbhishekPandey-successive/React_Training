function Weather(props)
{
    const temperature=props.temperature

    if(temperature>25)
    {
        return "It's Sunny today!"
    }

    if(temperature<10)
    {
        return "It's Cold Today!"
    }
}


export default Weather
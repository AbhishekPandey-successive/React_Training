import React from 'react'
import {useQuery,gql} from '@apollo/client'
import './CharacterList.css'

const GET_CHARACTERS=gql`
query {
    characters{
      results{
        id
        name
        image
        gender
      }
    }
  }
  

`

function CharacterList() {
    const {error,data,loading}=useQuery(GET_CHARACTERS)

    console.log({error,data,loading})


    if (loading) return <div>spinner.....</div>

    if (error) return <div>something went wrong </div>


  return (
    <div className='CharacterList'>
    {
        data.characters.results.map((character)=>{
            return (
                <div>
                
                <img src={character.image}/>
                <h2>{character.name}</h2>

                </div>
            );
        })
    }
      
    </div>
  )
}

export default CharacterList

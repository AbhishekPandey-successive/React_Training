import React,{useState} from 'react'
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

function CharacterListPagination() {

    const [currentPage,setCurrentPage]=useState(1);
    const itemPerPage=3;

    const {error,data,loading}=useQuery(GET_CHARACTERS)

    console.log({error,data,loading})


    if (loading) return <div>spinner.....</div>

    if (error) return <div>something went wrong </div>


    const startIndex=(currentPage-1)*itemPerPage;
    const endIndex=startIndex+itemPerPage
    const miniData=data.characters.results.slice(startIndex,endIndex);

  


  return (
    <div className='CharacterList'>
    {
        miniData.map((character)=>{
            return (
                <div>
                
                <img src={character.image}/>
                <h2>{character.name}</h2>

                </div>
            );
        })
    }


    <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>



      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={endIndex >= data.length} >
        Next
      </button>
      
    </div>
  )
}

export default CharacterListPagination

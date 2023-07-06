import React from 'react'
import { Circle, Container, Button } from './styles'
import { useUser } from '../../hooks/useUser'

export default function Pagination() {
  const { page, nextPage, previousPage, users, query } = useUser()


  return (
   <>
    {!(users.length === 0 && query !== null) &&(
       <Container>
       <Button title='Previous' onClick={() => previousPage()}> {"<"} </Button>
       <Circle>
         <p>{page}</p>
       </Circle>
       <Button title='Next' onClick={() => nextPage()} > {">"} </Button>
     </Container>
    )}
   
   </>
  )

}

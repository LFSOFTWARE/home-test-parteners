import React from 'react'
import { Circle, Container, Button } from './styles'

export default function Pagination() {
  return (
    <Container>
      <Button title='Previous'> {"<"} </Button>
      <Circle>
        <p>1</p>
      </Circle>
      <Button title='Next'> {">"} </Button>
    </Container>
  )
}

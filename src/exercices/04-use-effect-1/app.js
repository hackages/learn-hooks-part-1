import React from 'react'
import {Container, InputArea} from "../../helpers/Styled";

export const Exercise4  = () => {
  document.title = 'Change this'
  return (
    <Container>
      <h1>Check the title of the tab</h1>
      <InputArea
        value={''}
        onChange={({target: {value}}) => {}}
      />
    </Container>
  )
}



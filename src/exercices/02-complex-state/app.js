import React from 'react'
import {Button, Container, InputArea, Label} from "../../helpers/Styled";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT = 'INPUT';


export const Exercise2 = () => {
  const state = {}
  const dispatch = () => {}

  return (
    <Container>
      <p>{state.count}</p>
      <Button onClick={() => dispatch({type: INCREMENT})}>+</Button>
      <Button onClick={() => dispatch({type: DECREMENT})}>-</Button>
      <Label>Text</Label>
      <InputArea
        value={state.text}
        onChange={({target: {value}}) => dispatch({type: INPUT, payload: value})}
      />
      Your text is:
      <pre>
        {state.text}
      </pre>
    </Container>
  )
}



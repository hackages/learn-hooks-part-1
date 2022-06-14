import { INCREMENT, DECREMENT, INPUT } from "./actions";

export function reducer(state, action){
  switch(action.type){
   case INCREMENT: {
    return {
      ...state,
      count: state.count + 1
    }
   }
   case DECREMENT: {
    return {
      ...state,
      count: state.count - 1
    }
   }
  case INPUT: {
    return {
      ...state,
      text: action.text
    }
   }
  }
  return state;
}
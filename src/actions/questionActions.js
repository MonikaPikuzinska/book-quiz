import { client } from './client';

const initialState = []

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case 'question/questionLoaded': {
      return [...state, action.payload]
    }
    default:
      return state
  }
}
export function fetchNewQuestion(url) {
  return async function fetchQuestion (dispatch, getState) {
  const response = await client.get(url)
  dispatch({ type: 'question/questionLoaded', payload: response })
} 
}


import { client } from './client';

const initialState = null;

export default function answerReducer(state = initialState, action) {
  switch (action.type) {
    case 'answer/answerLoaded': {
      return action.payload
    }
    default:
      return state
  }
}
export function fetchNewAnswer(url) {
  return async function fetchAnswer (dispatch, getState) {
  const response = await client.get(url)
  dispatch({ type: 'answer/answerLoaded', payload: response })
} 
}

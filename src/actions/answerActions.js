import axios from 'axios';

export const getAnswer = (APILink, dispatch) => {
    dispatch(fetchAnswerBegin());
    axios.get(APILink)
        .then(function (res) {
            res.json();
        })
        .then(function (json) {
            dispatch(fetchAnswerSuccess(json.answer));
            return json.answer;
        })
    }

export const FETCH_ANSWER_BEGIN   = 'FETCH_ANSWER_BEGIN';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWER_FAILURE = 'FETCH_ANSWER_FAILURE';

export const fetchAnswerBegin = () => ({
    type: FETCH_ANSWER_BEGIN
  });
  
export const fetchAnswerSuccess = answer => ({
    type: FETCH_ANSWER_SUCCESS,
    payload: { answer }
  });
  
export const fetchAnswerFailure = error => ({
    type: FETCH_ANSWER_FAILURE,
    payload: { error }
  });
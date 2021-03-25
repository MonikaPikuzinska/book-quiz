import axios from 'axios';

export const getQuestion = (lang, APILink, dispatch) => {
    return dispatch => {
    dispatch(fetchQuestionBegin());
    return axios.get(APILink)
        .then(json => {
            dispatch(fetchQuestionSuccess(json.question[lang]));
            return json.question[lang];
      })
        .catch(error =>
            dispatch(fetchQuestionFailure(error))
      );
    }
}

export const FETCH_QUESTION_BEGIN   = 'FETCH_QUESTION_BEGIN';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE';

export const fetchQuestionBegin = () => ({
    type: FETCH_QUESTION_BEGIN
  });
  
export const fetchQuestionSuccess = question => ({
    type: FETCH_QUESTION_SUCCESS,
    payload: { question }
  });
  
export const fetchQuestionFailure = error => ({
    type: FETCH_QUESTION_FAILURE,
    payload: { error }
  });
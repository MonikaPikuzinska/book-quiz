import { useSelector, useDispatch, connect } from 'react-redux';
import { API } from '../components/API';
import axios from 'axios';

const book = useSelector(state => state.book);
const dispatch = useDispatch();
const currentQuestion = useSelector(state => state.currentQuestion);
const APILink = `${API}/${book}/${currentQuestion}`;

export const getQuizlen = () => {
    dispatch(fetchQuizlenBegin());
    axios.get(APILink)
        .then(function (res) {
            res.json();
        })
        .then(function (json) {
            dispatch(fetchQuizlenSuccess(json.all_question));
            return json.all_question;
        })
    };

export const FETCH_QUIZLEN_BEGIN   = 'FETCH_QUIZLEN_BEGIN';
export const FETCH_QUIZLEN_SUCCESS = 'FETCH_QUIZLEN_SUCCESS';
export const FETCH_QUIZLEN_FAILURE = 'FETCH_QUIZLEN_FAILURE';

export const fetchQuizlenBegin = () => ({
    type: FETCH_QUIZLEN_BEGIN
  });
  
export const fetchQuizlenSuccess = quizlen => ({
    type: FETCH_QUIZLEN_SUCCESS,
    payload: { quizlen }
  });
  
export const fetchQuizlenFailure = error => ({
    type: FETCH_QUIZLEN_FAILURE,
    payload: { error }
  });
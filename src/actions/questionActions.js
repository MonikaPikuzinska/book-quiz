import { useSelector, useDispatch, connect } from 'react-redux';
import { API } from '../components/API';
import axios from 'axios';

const book = useSelector(state => state.book);
const dispatch = useDispatch();
const lang = useSelector(state => state.lang);
const currentQuestion = useSelector(state => state.currentQuestion);
const APILink = `${API}/${book}/${currentQuestion}`;

export const getQuestion = async() => {
    dispatch(fetchQuestionBegin());
    await axios.get(APILink)
        .then(function (res) {
            res.json();
        })
        .then(function (json) {
            dispatch(fetchQuestionSuccess(json.question[lang]));
            return json.question[lang];
        })
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
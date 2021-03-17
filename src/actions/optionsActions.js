import { useSelector, useDispatch, connect } from 'react-redux';
import { API } from '../components/API';
import axios from 'axios';

const book = useSelector(state => state.book);
const dispatch = useDispatch();
const lang = useSelector(state => state.lang);
const currentQuestion = useSelector(state => state.currentQuestion);
const APILink = `${API}/${book}/${currentQuestion}`;

export const getOptions = async() => {
    dispatch(fetchOptionsBegin());
    await axios.get(APILink)
        .then(function (res) {
            res.json();
        })
        .then(function (json) {
            dispatch(fetchOptionsSuccess(json.options[lang]));
            return json.options[lang];
        });
    }

export const FETCH_OPTIONS_BEGIN   = 'FETCH_OPTIONS_BEGIN';
export const FETCH_OPTIONS_SUCCESS = 'FETCH_OPTIONS_SUCCESS';
export const FETCH_OPTIONS_FAILURE = 'FETCH_OPTIONS_FAILURE';

export const fetchOptionsBegin = () => ({
    type: FETCH_OPTIONS_BEGIN
  });
  
export const fetchOptionsSuccess = options => ({
    type: FETCH_OPTIONS_SUCCESS,
    payload: { options }
  });
  
export const fetchOptionsFailure = error => ({
    type: FETCH_OPTIONS_FAILURE,
    payload: { error }
  });
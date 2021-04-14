import langReducer from './language';
import bookReducer from './book';
import colorReducer from './color';
import currentQuestionReducer from './currentQuestion';
import questionReducer from '../actions/questionActions'
import answerReducer from '../actions/answerActions';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lang: langReducer,
    book: bookReducer,
    color: colorReducer,
    currentQuestion: currentQuestionReducer,
    question: questionReducer,
    answer: answerReducer
});

export default allReducers;
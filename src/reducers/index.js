import langReducer from './language';
import bookReducer from './book';
import colorReducer from './color';
import currentQuestionReducer from './currentQuestion';
import questionReducer from './question';
import optionsReducer from './options';
import quizlenReducer from './quizlen';
import answerReducer from './answer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lang: langReducer,
    book: bookReducer,
    color: colorReducer,
    currentQuestion: currentQuestionReducer,
    question: questionReducer,
    options: optionsReducer,
    quizlen: quizlenReducer,
    answer: answerReducer
});

export default allReducers;
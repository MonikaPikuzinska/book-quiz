import langReducer from './language';
import bookReducer from './book';
import colorReducer from './color';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    lang: langReducer,
    book: bookReducer,
    color: colorReducer
});

export default allReducers;
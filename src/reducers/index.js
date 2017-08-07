import {combineReducers} from 'redux';

import todos from './todo';
import visibleFilter from './visibleFilter.js';
const TodoReducers = combineReducers({
    todos,
    visibleFilter
});

export default TodoReducers;

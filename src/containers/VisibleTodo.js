import {connect} from 'react-redux';
import React from 'react';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';

const getVisibleTodo = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = (state) => {
    return ({
    todos: getVisibleTodo(state.todos, state.visibleFilter)
})};

const mapDispatchToProps = (dispatch) =>{
    return {
         onClick: (id) => {
		    dispatch(toggleTodo(id));
	    }
     }
   }

const VisibleTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodo;
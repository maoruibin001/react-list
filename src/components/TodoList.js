import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onClick}) => {
   return  <ul>
        {todos.map(todo => {
            return <Todo onClick={() => {onClick(todo.id)}} {...todo}/>
        })}
    </ul>
}

export default TodoList;
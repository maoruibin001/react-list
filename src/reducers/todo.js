const Todo = (state=[], action) => {
    console.log(22);
    switch(action.type) {
        case 'ADD_TODO':
            return [{
                completed: false,
                text: action.text,
                id: action.id
            }, ...state]
        case 'TOGGLE_TODO': 
           return (state.map((todo) => (
                todo.id === action.id ? Object.assign({}, todo, {
                    completed: !todo.completed
                }) : todo)
            ));
        default:
            return state;
    }
}

export default Todo;
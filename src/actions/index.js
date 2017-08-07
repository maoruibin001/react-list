let originId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: originId++,
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBLE_FILTER', 
        filter
    }
}
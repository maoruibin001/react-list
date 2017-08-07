const Todo = ({onClick, text, completed}) => {
    return <li className={completed ? 'h1': 'h2'} onClick={onClick} style={{
        'text-decoration': completed ? 'line-through': 'none'
    }}>{text}</li>
}

export default Todo;
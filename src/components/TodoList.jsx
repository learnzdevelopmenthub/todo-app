const TodoList = ({todos, deleteTodo, toggleComplete}) => {
    return(
        <ul>
            { todos.map( item => (
                <li key={item.id}>
                    <input type="checkbox" checked={item.isCompleted} onClick={() => toggleComplete(item.id)}/>
                    <span className={item.isCompleted ? "completed" : ""} >{item.text} </span>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
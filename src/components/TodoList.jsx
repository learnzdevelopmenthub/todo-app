const TodoList = ({todos, deleteTodo}) => {
    return(
        <ul>
            { todos.map( item => (
                <li key={item.id}>
                    {item.text} 
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
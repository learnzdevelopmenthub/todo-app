import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState(
    [
      {id: 1, text: 'Learn React'},
      {id: 2, text: 'Build first App'}
    ]
  )

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), text: text}] )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter( item => item.id != id))
  }

  return (
    <>
      <h1>To-Do App</h1>
      <AddTodo addTodo={addTodo} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App


// add, list, delete
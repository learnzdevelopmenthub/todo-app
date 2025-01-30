import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  const [ searchKey, setSearchKey ] = useState("")

  const addTodo = (text) => {
    setTodos((prevTodos) => { 
      const newTodos = [...prevTodos, {id: Date.now(), text: text, isCompleted: false}]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>{ 
      const newTodos = prevTodos.filter( item => item.id != id)
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => { 
      const newTodos = prevTodos.map(item =>item.id == id ? {...item, isCompleted: !item.isCompleted} : item)
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }

  const filteredTodos = todos.filter((item) => {
    return item.text.toLowerCase().includes(searchKey.toLowerCase())
  })

  return (
    <>
      <h1>To-Do App</h1>
      <AddTodo addTodo={addTodo} todos={todos} />
      <br />
      <input type="text" 
        placeholder='Search Todos..' 
        style={{marginTop: "10px"}} 
        onChange={(e)=> setSearchKey(e.target.value)}
      />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
    </>
  )
}

export default App


// add, list, delete, search, completed & undo, localstorage
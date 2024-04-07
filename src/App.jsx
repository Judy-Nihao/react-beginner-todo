import { useState } from 'react'
import NewTodoForm from './NewTodoForm'
// import TodoList from './ToDoList';
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);

  const addTodoFunc = (newItem) => {
    setTodos((prev)=>{
          return [...prev,{
            title: newItem,
            id: crypto.randomUUID(),
            completed: false
          }]
        })
    
  }

  const toggleTodo = (id, completed) => {
    setTodos( prevTodos => {
      return prevTodos.map((todo) => {
        if (id === todo.id ){
          return {...todo, completed: completed}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
   setTodos((prevTodos) => {
    return prevTodos.filter((todo) => {
      if(id !== todo.id){
        return todo
      }
    })
   })
  }

  console.log(todos);

  return (
    <div className="container">
      <NewTodoForm addTodo={addTodoFunc}/>
      <h1 className="header">To Do List</h1>
      <ul className="list">
      { todos.length === 0 && <span className='no-todos'>No Todos</span>}
        {todos.map((todo)=>{
          return  <li key={todo.id}>
          <label><input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>{todo.title}</label>
          <button className="btn btn-danger" onClick={()=> {deleteTodo(todo.id)}}>Delete</button>
        </li>
        })}
      </ul>
    </div>
  )
}

export default App

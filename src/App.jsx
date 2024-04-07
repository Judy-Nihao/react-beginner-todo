import { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoList from './ToDoList';
import './App.css'
import { useEffect } from 'react';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    console.log(todos)
  },[todos])

  const addTodoFunc = (title) => {
    setTodos((prev)=>{
          return [...prev,{
            title: title,
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


  return (
    <div className="container">
      <NewTodoForm addTodo={addTodoFunc}/>
      <h1 className="header">To Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App

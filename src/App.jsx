import { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoList from './ToDoList';
import './App.css'
import { useEffect } from 'react';


function App() {

  // 讓預設 state 是去 localStorage 裡面抓
  const [todos, setTodos] = useState(()=>{
    let localItemValue = localStorage.getItem('ITEMS');
    if (localItemValue == null) return []
    return JSON.parse(localItemValue)
  });

  useEffect(()=>{
    localStorage.setItem('ITEMS', JSON.stringify(todos));
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

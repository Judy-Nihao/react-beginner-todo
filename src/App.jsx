import { useState } from 'react'
// import NewTodoForm from './NewTodoForm'
// import TodoList from './ToDoList';
import './App.css'


function App() {

  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos((prev)=>{
      return [...prev,{
        title: newItem,
        id: crypto.randomUUID(),
        completed: false
      }]
    })

    setNewItem('');
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
      <form className='new-item-form' onSubmit={handleSubmit} >
          <div className='form-row'>
            <label htmlFor='item' className='form-title'>New Item</label>
            <input type='text' id='item' value={newItem} onChange={ e => setNewItem(e.target.value)}/> 
          </div>
          <button className="add">Add</button>
      </form>
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

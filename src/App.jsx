import { useState } from 'react'
// import NewTodoForm from './NewTodoForm'
// import TodoList from './ToDoList';
import './App.css'


function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  
  const updateTodo = (e) => {
    setTodo(e.target.value);
  }

  return (
    <div className="container">
      <form className='new-item-form'>
          <div className='form-row'>
            <label htmlFor='item' className='form-title'>New Item</label>
            <input type='text' id='item' value={todo} onChange={updateTodo}/>
          </div>
          <button className="add">Add</button>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        <li>
          <label><input type="checkbox" />item 1</label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label><input type="checkbox" />item 2</label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </div>
  )
}

export default App

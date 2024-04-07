import { useState } from 'react'


export function NewTodoForm({addTodo}){
    const [newItem, setNewItem] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        if ( newItem === '') return;

        addTodo(newItem);
        
        setNewItem('');
      }
    
    
    return (
        <form className='new-item-form' onSubmit={handleSubmit} >
        <div className='form-row'>
          <label htmlFor='item' className='form-title'>New Item</label>
          <input type='text' id='item' value={newItem} onChange={ e => setNewItem(e.target.value)}/> 
        </div>
        <button className="add">Add</button>
    </form>
    )
}

export default NewTodoForm
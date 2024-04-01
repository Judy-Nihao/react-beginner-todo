import { useState } from 'react'

export function NewTodoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("");
    // 點擊 form 裡面的 button 時不做任何事，使不會重新刷頁面，使 input 內的資料不會被清空

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newItem === '') return

        onSubmit(newItem);

        // 按下新增按鈕後就清空 input 裡面的 value
        setNewItem('');
        
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
            <label htmlFor='item' className='form-title'>New Item</label>
            <input 
            value={newItem} 
            onChange={ e => setNewItem(e.target.value) }
            type='text' id='item'/>
            </div>
            <button className="add">Add</button>
        </form>
        )
}

export default NewTodoForm
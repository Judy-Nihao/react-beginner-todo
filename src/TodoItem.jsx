export function TodoItem ({title, completed, id, toggleTodo, deleteTodo}){

    return(
        <li key={id}>
        <label><input type="checkbox" checked={completed} 
        onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
        </label>
        <button className="btn btn-danger" 
        onClick={()=> {deleteTodo(id)}}
        >Delete
        </button>
      </li>
    )

}

export default TodoItem;
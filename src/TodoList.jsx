import TodoItem from './TodoItem';

export function TodoList ({todos, toggleTodo, deleteTodo}){

    return (
        <ul className="list">
        { todos.length === 0 && <span className='no-todos'>No Todos</span>}
          {todos.map((todo)=>{
            return <TodoItem 
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed} 
            key={todo.id} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}/>
          })}
        </ul>
    )
}

export default TodoList;
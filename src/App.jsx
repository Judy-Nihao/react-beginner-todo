import { useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // 因為不能直接修改 todos 變數，用擴展運算子淺拷貝一個 todos，並且增加物件賦值
    // setTodos() 裡面如果不是放 function 而是直接放一個陣列去更新 todos 的話，因為裡面有用到擴展運算子去抓 todos 的初始值，每次都會從頭去抓 todos 的初始 state，而不是抓到前一次 setTodos 執行完後的 todos 的最新的結果
    // 若想用執行後的最新 todo 去更新新一批的陣列，要在 setTodos() 裡面再放一個 function，function 本身要 return ，function 代入的參數則是上一次異動後的最新 todos，讓 setTodos() 每一次運算都能接續用上一次最新的 todos 去執行，

    setTodos((currentTodos) => {
      return[
          ...currentTodos, 
          {
          id: crypto.randomUUID(),
          title,
          completed: false
          }
        ]
      });
}


  // 將被點擊到的 todo 的 checked 狀態，更新進去 todos state 裡面
  // 拿現在點擊到的 todo 跟 todos 陣列裡面的 todo 相比較
  // 最外層的 id 會帶入的是現在所點擊到的 todo 的 id 
  // 內層的 currentTodos 則是當下的 todos 的陣列 state 
  // 要注意 2 個 return
  // 第一個 return 是整體 todos state 更新後的狀態
  // 第二個 return 代表只去更新 id 相符合也就是被點擊到那個 return
  // 也就是說 todos state 陣列內，只去更換有被點擊到因此 completed 屬性質有變化的那個物件，這也就是為什麼第二個 return 後面是會傳一個 {} 
  // 如果沒有 id match ，表示現在沒有任何一個 todo 有被點擊到，就返回原本的所有 todo
  const toggleTodo = (id, completed) => {
    setTodos( currentTodos => {
      return currentTodos.map( todo => {
          if(todo.id === id){
            return {...todo, completed}
          }
          return todo
        }
      )
    })
  }

  // 點擊刪除按鈕
  // 被點擊到的那個 todo 要消失，也就是 id 相符 的要消失
  // 也就是說 id 不相符的要保留
  // 拿被點擊到的該 todo 的 id 和 todos 陣列 state 的 id 相比較，只有 id 不相符的會留在 todos 陣列中
  // 換句話說被點擊到的形同被刪除了
  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter( todo => todo.id !== id)
    })
  }

  return (
    <div className="container">
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        { todos.length === 0 && <span className='no-todos'>No Todos</span> }
        {todos.map(todo => {
          return <li key={todo.id}>
              <label>
                <input 
                type="checkbox" 
                defaultChecked={todo.completed}
                onChange={ e => toggleTodo(todo.id, e.target.defaultChecked) }
                />
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => {deleteTodo(todo.id)}}>Delete</button>
            </li>
        })}
              
      </ul>
    </div>
  )
}

export default App

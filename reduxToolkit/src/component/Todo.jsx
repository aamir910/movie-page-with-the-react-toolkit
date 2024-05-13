import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeTodo } from '../App/features/todos/todoSlices'

const Todo = () => {
  const todos = useSelector(state.todos)
  const dispatch = useDispatch() ;
  return (
    <>
    <h1>
     todos  
    </h1>

      
{todos.map((todo)=> (
  <li key={todo.id}>
       {todo.text}       
      <button
      onClick={()=>removeTodo(todo.id) }>
        
        delete 
      </button>
    </li>
))}
    
    </>
  )
}

export default Todo

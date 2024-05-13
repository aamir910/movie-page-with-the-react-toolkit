import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeTodo } from '../App/features/todos/todoSlices'

const Todo = () => {
  const todos = useSelector(state => state.todos)
 console.log(todos)
  const dispatch = useDispatch() ;
  return (
    <>
    <h1>
     todos  
    </h1>
    <div>

   
{todos.map((todo)=> (
  <li key={todo.id}>
       {todo.text}       
      <button
      onClick={()=>  dispatch( removeTodo(todo.id)) }>

        delete 
      </button>
    </li>
))}
</div>
    
    </>
  )
}

export default Todo

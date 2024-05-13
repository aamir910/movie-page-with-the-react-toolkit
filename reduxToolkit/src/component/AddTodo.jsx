import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../App/features/todos/todoSlices'
const AddTodo = () => {
    const {Input , setInput} = useState("")
     const dispatch = useDispatch();

     const addtodohandler =(e) =>{
         e.preventDefault()
         dispatch(addTodo( Input) )
         
           setInput('')
     }
  return (
    <div>
      <form onSubmit={addtodohandler}>
          
          <input type="text"
          placeholder='enter the todo'
          value={Input}
          onChange={()=>setInput(e.target.value)} />

      </form>
      <button>submit</button>

    </div>
  )
}

export default AddTodo

import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../App/features/todos/todoSlices'
const AddTodo = () => {
    const [Input , setInput] = useState("")
     const dispatch = useDispatch();

     const addtodohandler =(e) =>{
         e.preventDefault()
         dispatch(addTodo( Input) )
           setInput('');
     }  
  return (
    <div>
      <form onSubmit={addtodohandler}> 
          <input type="text"
          placeholder='enter the todo'
          value={Input}
          onChange={(e) => setInput(e.target.value)} 
           />

      <button type='submit'>submit</button>

      </form>

    </div>
  )
}

export default AddTodo

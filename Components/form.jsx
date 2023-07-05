import React, { useState } from 'react'

import { addTodo } from '../Todos/TodosSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const Form = () => {
const [title, setTitle] = useState("")

const dispatch = useDispatch()

const handleSubmit = (e)=>{
e.preventDefault()
dispatch(addTodo({id:nanoid(), title ,complated:false }))
setTitle("")


}

 
  return (
    <form action="" onSubmit={handleSubmit}>
    <input
      type="text "
      className="new-todo "
      placeholder="Lütfen giriş yapiniz"
      autoFocus
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
   
    />

  
  </form>
  )
}

export default Form
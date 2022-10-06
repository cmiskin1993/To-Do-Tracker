import React from 'react'
import '../todo/Todo.css'

const handleSubmit = (e) =>{
  e.preventDefault();
}

const Todo = () => {


  return (
  <div>
    <h2>Create a To-Do List </h2>
      <form onSubmit={ handleSubmit } className='form-container'>
          <div>
            <label> Weekday: </label>
            <input type="text" name="week-day" id='week-day' />
          </div>
          <input type="submit" value="Create To-Do List" />
        </form>
  </div>
  )
}

export default Todo
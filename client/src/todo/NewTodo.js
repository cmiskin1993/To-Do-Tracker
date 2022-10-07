import React, { useState } from 'react';
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker/to-do-tracker/client/src/todo/Todo.css'

const NewTodo = ({ user }) => {

    const [title, setTitle] = useState("");
    const [instructions, setInstructions] = useState("");

//   const [isLoading, setIsLoading] = useState(false);


const handleSubmit = e => {
    e.preventDefault();
    // setIsLoading(true);
    // fetch("/todos", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title,
    //     instructions,
    //   }),
    // }).then(() => {
    //   setIsLoading(false);
    // });
    }

return (
<div>
<h2>Create a new to-do</h2>
    <form onSubmit={ handleSubmit } className='form-container'>
        <div>
            <label htmlFor='weekday'>Weekday: </label>
            <input type='text' name='title' id='title' value={title} onChange={event => setTitle(event.target.value)} />
        </div>
        <div>
            <label htmlFor='todo'>Todo: </label>
            <input type='text' name='instructions' id='instructions' value={instructions} onChange={ event => setInstructions(event.target.value)} />
        </div>
        <div>
        <input className='center-submit' type="submit" value='Enter' />
        </div>
    </form>
</div>
  );
}


export default NewTodo;
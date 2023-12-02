// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const User = () => {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data=> setTodos(data));
  }, [])
  console.log(todos)
  return (
    <div>
       <Navbar/>
       <h1 className='text-center'>Total Title  {todos.length}</h1>
       <ul className='text-center'>
        {todos.map((todo) => (
          <li key={todo.id}>
           Title: {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User

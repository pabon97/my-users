// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const User = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
 fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data=> setUsers(data.users));
  }, [])
  console.log(users)
  return (
    <div>
       <Navbar/>
       <h1 className='text-center'>Total User Found {users.length}</h1>
       <ul className='text-center'>
        {users.map((user) => (
          <li key={user.id}>
           Name: {user.firstName}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User

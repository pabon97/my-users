// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [user, setUser] = useState([])
  useEffect(()=>{
 const users = JSON.parse(localStorage.getItem('user'))
 if(users){
  setUser(users)
 }

  }, [])
  const handleLogout =() => {
  localStorage.removeItem('user')
  }
  console.log(user)
  return (
  <div>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-primary="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">Posts List</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white-50"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/posts">Posts</a>
        </li>
        {
          user.email ?
          <li className='nav-item' onClick={handleLogout}>
              <a className="nav-link text-white" href='/'>Logout</a>
            </li> : ""
        }
        {
          user && <div>
            <p className='my-2 mx-5 text-white'>{user.email}</p>
          </div>
        }
       
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
}

export default Navbar

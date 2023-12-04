// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data=> setPosts(data));
  }, [])
  // console.log(posts)
  return (
    <div className='container'>
    <h1 className='text-center'>Total Posts {posts.length}</h1>
    <div className="row">
      {posts.map(post => (
        <div className="card col-md-4 mb-4 mx-2 my-3" key={post.id} style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Posts

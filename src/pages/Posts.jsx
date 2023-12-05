// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Post from '../Components/Post';

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
      {
        posts.map((post)=>(
          <Post
          key={post.id}
          post={post}
          ></Post>
        )
         
        )
      }
    </div>
  </div>
  )
}

export default Posts

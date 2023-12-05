// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Post from '../Components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then((data)=>{
  setPosts(data);
setLoading(false)
})
  }, [])
  // console.log(posts)

  return (
    <div className='container'>
   {
    loading ? <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div> : 
   <div className="row">
    <h2 className='text-center'>Total Posts {posts.length}</h2>
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
   }
   
  </div>
  )
}

export default Posts

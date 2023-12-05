import React from 'react'

const Post = ({post}) => {
    const {title, body} = post;
  return (
    <div className="card col-md-4 mb-4 mx-2 my-3" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </div>
        </div>
  )
}

export default Post

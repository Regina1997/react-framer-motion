import React from 'react'
import { useAsyncValue } from 'react-router';

function Post(){
    const post = useAsyncValue();
  
    return (
      <div className="post__main">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
};

export default Post
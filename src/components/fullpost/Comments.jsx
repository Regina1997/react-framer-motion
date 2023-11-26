import React from 'react'
import { useAsyncValue } from 'react-router';
import avatar from "../../assets/user-286-256.png";

function Comments(){
    const comments = useAsyncValue();
  
    return (
      <div className="post__comments">
        <h2>Comments</h2>
        <hr />
        {comments.map((comment) => (
          <div className="post__comments--container" key={comment.id}>
            <div className="post__comments--avatar">
              <img src={avatar} alt="user" />
            </div>
            <div className="post__comments--data">
              <p>{comment.email}</p>
              <h4 style={{fontSize: '2.2rem', marginBottom: '0.6rem', fontWeight: 600}}>{comment.name}</h4>
              <p style={{fontSize: '1.8rem', marginBottom: '1rem'}}>{comment.body}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Comments
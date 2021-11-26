
import React from 'react';

const Contact = ({post}) => {
  
  return (
    <div>
      <li>
        <span>email: {post.email.email}</span>
      </li>
    </div>
  )
}

export default Contact

import React from 'react';

const Contact = ({post}) => {
  
  return (
    <div>
      <li>
        <span>{post.img.img} – {post.name.name} – {post.email.email} – {post.phone.phone}</span>
      </li>
    </div>
  )
}

export default Contact
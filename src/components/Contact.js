
import React from 'react';

const Contact = ({post}) => {
  
  return (
    <div>
      <li>
        <span><img className="profile-img" src={post.img.img} /> – {post.name.name} – {post.email.email} – {post.phone.phone}</span>
      </li>
    </div>
  )
}

export default Contact
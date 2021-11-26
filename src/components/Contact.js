
import { Link } from 'react-router-dom';
import React from 'react';

const Contact = ({post}) => {
  
  return (
    <div>
      <li>
        <Link to="/individual-contact"><img className="profile-img" src={post.img.img} /> – {post.name.name} – {post.email.email} – {post.phone.phone}</Link>
      </li>
    </div>
  )
}

export default Contact
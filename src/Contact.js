import React from 'react';

const Contact = ({contact}) => {
  return (
    <div className="container text-center">
      <div class="row">
        <div class="col border pt-3 pb-3">
          <img src={contact.image} width="250" height="180"/>
        </div>
        <div class="col border">
          {contact.name}
        </div>
        <div class="col border">
          {contact.email}
        </div>
        <div class="col border">
          {contact.phone}
        </div>
      </div>
    </div>
  )
}

export default Contact;
import React from 'react';

const ContactNew = () => {
  return (
    <form>
      <div class="form-group">
        <label for="nameInput">Full Name</label>
        <input type="text" className="form-control" id="nameInput" placeholder="John Doe" />
      </div>
      <br/>
      <div class="form-group">
        <label for="emailInput">Email</label>
        <input type="email" className="form-control" id="emailInput" placeholder="John@email.com" />
      </div>
      <br/>
      <div class="form-group">
        <label for="phoneInput">Phone Number</label>
        <input type="tel" className="form-control" id="phoneInput" placeholder="111-111-1111" />
      </div>
      <br/>
      <div class="form-group">
        <label for="imageInput">Image Url</label>
        <input type="text" className="form-control" id="imageInput" placeholder="Image Url" />
      </div>
      <br/>
      <button type="button" className="btn btn-primary">Add Contact</button>
    </form>
  )
};

export default ContactNew
import React, {Component} from 'react';

class AddNewContact extends Component {
  render () {
return (

  <div className="container">
  <h2>Add Contact</h2>
  <form >
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter Full Name"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        className="form-control"
        id="phone"
        pattern="[0-9]{10}"
        placeholder="5552223333"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="form-control"
        id="email"
        placeholder="example@email.com"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        className="form-control"
        id="image"
        placeholder="https://URL.jpg"
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Add Contact
    </button>
  </form>
</div>
);
};
};
 
export default AddNewContact;
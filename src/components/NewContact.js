import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewContact extends Component {


  handleClick () {

  }

  render() {
    return (
      <form className="contact-form">
        <h3>Add New Contact</h3>

        <div className="form-group">
          <input
           type="text"
           id="profile-image" 
           className="form-control" 
           placeholder="Picture URL">Add Profile Picture</input>

          <br/>

          <input
           type="text" 
           id="contact-name" 
           className="form-control" 
           placeholder="Enter Full Name">Full Name</input>
           
           <br/>

           <input
           type="text" 
           id="contact-email" 
           className="form-control" 
           placeholder="Enter Email">Email Address</input>

           <br/>

           <input
           type="number" 
           id="contact-number" 
           className="form-control" 
           placeholder="Enter Phone Number">Phone Number</input>
        </div>
        
        <Link to="/index.js">
            <button onClick={this.handleClick} type="submit" className="btn btn-primary add-post">Add Contact</button>
        </Link>
        
      </form>
    );
  }
};

const generateId = () => Math.round(Math.random() * 100000000);


export default NewContact;
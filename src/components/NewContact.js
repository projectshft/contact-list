import React from "react";
import { Link, withRouter } from "react-router-dom";

// this component takes contacts and history from App.js to run accordingly
const NewContact = ({contacts, history}) => {

  const handleSubmit = (e => {
    e.preventDefault();

    // get the form data from the event target
    const form = new FormData(e.currentTarget);

    // not the best method for create a new id but it works for this
    let userInputs = {id: Math.floor(Math.random() * 100000), name: '', image_url: '', email: '', phone_number: '' };

    //get the keys and values form and as long as they arent empty pass them to userInputs then push to contacts, then finally go back to beginning after submitted
    for (let [key, value] of form.entries()) {
      if(value === ''){
        return alert("Invalid inputs!")
      }
      userInputs[key] = value;
    }
    contacts.push(userInputs);
    history.push('/');
  })
 

  return (
    <div className="form">
      
      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <div>
          <input type="text" name="name" placeholder="Enter name"/>
        </div>

        <label>Email Address</label>
        <div>
          <input type="email" name="email" placeholder="Enter email address"/>
        </div>

        <label>Phone Number</label> 
        <div>
          <input type="text" name="phone_number" placeholder="Enter phone number"/>
        </div>

        <label>Image Url</label>
        <div>
          <input type="image_url" name="image_url" placeholder="image url"/>
        </div> 
        <div id='primary'>
          <button className="btn btn-primary" >Create new contact</button>
        </div>

      </form>

      <Link to="/" ><button className="btn btn-danger">Back</button></Link>

    </div>
  )

};

export default withRouter(NewContact);
import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NewContact = () => {
  const navigate = useNavigate();
  const location = useLocation ();
  
  const [contactInfo, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    image: ''
  });

  const handleChange = (event) => {
    setContact({ ...contactInfo, [event.target.name]: event.target.value });
  }

  const onClickFunc = (event) => {
    event.preventDefault();
    let newState = location.state || [];
    newState.push(contactInfo);
    navigate("/contacts", {state: newState})
  }

  return (
    <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="page-header">
        <h1>New Contact</h1>
      </div>
      <form className="post-form">

        <div className="form-group">
          Full Name
          <input
            className="form-control"
            placeholder="Enter Full Name"
            name="name"
            value={contactInfo.name}
            onChange={handleChange}
             />
          <br/>
          Email Address
          <input
            className="form-control"
            placeholder="Enter Email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
            />
          <br/>
          Phone Number
          <input
            className="form-control"
            placeholder="Enter Phone"
            name="phone"
            value={contactInfo.phone}
            onChange={handleChange}
            />
          <br/>
          Image URL
          <input
            className="form-control"
            placeholder="Enter Image URL"
            name="image"
            value={contactInfo.image}
            onChange={handleChange}
            />
        </div>
        <button onClick={onClickFunc} type="button" className="btn btn-primary add-post">Add</button>
      </form>
    </div>
  </div>
  )
}


export default NewContact
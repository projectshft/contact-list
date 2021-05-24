import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/User";

const ContactForm = () => {
  
  // exports the state to the state context
  const { addUser } = useContext(UserContext);

  // sets the defaults of state
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    imageUrl: "",
    id: 0
  });

  // states for cases of empty inputs 
  const [showMsg, setShowMsg] = useState(false);
  const [message, setMessage] = useState("");

  // history of routes to route to
  let history = useHistory();
  
  //on click of button add contact
  const onAddContact = (e) => {
    e.preventDefault();
  
    // if the state that was grabbed from inputs is not blank...
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.number !== "" &&
      values.imageUrl !== ""
    ) {
      // creates a random id 
      const random = Math.round(Math.random() * 100000)
      setValues((prevState) => prevState.id = random)
      
    

      // run addUser which exports to context 
      addUser(values);
      // gives a message of contact added
      setMessage("Contact Added");
      //routes back to home page after showing message
      setTimeout(() => {
        history.push('/contacts')
      }, 850)
      
      // case for if fields are empty
    } else {
      setMessage("Fields cannot be empty");
    }
    setShowMsg(true); 
    
  };

  // uses history to route back to home component
  const cancelBtn = (e) => {
    return history.push("/contacts");
  };

  // grabs the values of the inputs and sets them to state
  const handleName = (e) => setValues({ ...values, name: e.target.value});

  const handleEmail = (e) => setValues({ ...values, email: e.target.value });

  const handleNumber = (e) => setValues({ ...values, number: e.target.value });

  const handleImageUrl = (e) => setValues({ ...values, imageUrl: e.target.value } );

  return (
    // the alert messages of the cases
    <div className="container form__wrapper">
      {showMsg && (
        <div className="alert__wrapper alert alert-primary" role="alert">
          {message}
        </div>
      )}

      {/* the inputs  */}
      <form className="mt-5">
        <div>
          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="full-name"
            value={values.name}
            onChange={handleName }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={values.email}
            onChange={handleEmail}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone-number" className="form-label">
            Phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone-number"
            value={values.number}
            onChange={handleNumber}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image-url" className="form-label">
            Image url
          </label>
          <input
            type="text"
            className="form-control"
            id="image-url"
            value={values.imageUrl}
            onChange={handleImageUrl}
          />
        </div>
        {/* add contact button */}
        <input
          onClick={onAddContact}
          type="button"
          className="btn btn-primary"
          value="Add Contact"
        />
        {/* cancel button */}
        <button onClick={cancelBtn} className="btn btn-primary ml-3">
          Cancel
        </button>
      </form>
      
    </div>
  );
};

export default ContactForm;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AddContact = ({onSubmit}) => {

  const navigate = useNavigate();

  // Define local state array, object keys, and set methods
  const [contactData, setContactData] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [photo, setPhoto] = useState("")
  
  const addContact = () => {
    const generateID = () => {
      return (Math.round(Math.random() * 100000000))
    };
    const id = generateID();
    const newContact = {id:id, name: name, email: email, phone_number: phone, image_url: photo};
    setContactData([...contactData, newContact])
    onSubmit(newContact);
    navigate("/contacts");
  }
  
  const goBack = () => {
    navigate("/contacts");
  }
  
  return (
    <div>
      <button className='btn btn-dark d-flex float-end' onClick={goBack} type="button" value="Submit">Go Back</button>
      <br />
      <h2>Add a New Contact</h2>
      <hr />
      <Form id="add-contact-form" onSubmit={addContact}>
        <FloatingLabel controlId="floatingInput" label="Name">
          <Form.Control
            type="text" 
            name="name" 
            placeholder='name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required>
          </Form.Control>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email Address">
          <Form.Control
            // className='was-validated'
            type="email" 
            name="email" 
            placeholder='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required>
          </Form.Control>
          {/* <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback> */}
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Phone Number">
          <Form.Control
            type="tel" 
            name="phone" 
            placeholder='xxx-xxx-xxxx'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required>
          </Form.Control>
          <small className='form-text'>format: xxx-xxx-xxxx</small>
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Photo URL">
          <Form.Control
            type="url" 
            name="photo" 
            placeholder='photo' 
            value={photo} 
            onChange={(e) => setPhoto(e.target.value)} 
            required>
          </Form.Control>
        </FloatingLabel>
        <button className='btn btn-dark' type="submit" value="Submit">Submit</button>
      </Form>
    </div>
  );
};

// typecheck with proptypes
AddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddContact;
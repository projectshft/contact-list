import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AddContact = (props) => {
  return (
    <div>
      <h2>Add a New Contact</h2>

      <Form id="add-contact-form">
        <FloatingLabel controlId="floatingInput" label="Name">
          <Form.Control type="text" name="name" placeholder='name' required></Form.Control>
        </FloatingLabel>

        <FloatingLabel className='was-validated' controlId="floatingInput" label="Email Address">
          <Form.Control type="email" name="email" placeholder='email' required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Phone Number">
          <Form.Control type="tel" name="phone" placeholder='xxx-xxx-xxxx' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></Form.Control>
          <small className='form-text'>format: xxx-xxx-xxxx</small>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Photo URL">
          <Form.Control type="url" name="photo" placeholder='photo' required></Form.Control>
        </FloatingLabel>

        <button className='btn btn-dark' type="submit" value="Submit">Submit</button>
      </Form>
    </div>
  );
};

export default AddContact;
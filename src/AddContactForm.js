import {useState} from 'react';

const AddContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleClick = () => {
    props.addContact({
      name: name,
      email: email,
      number: number,
      imgUrl: imgUrl
    })

    props.history.push('/');
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form className="contact-form">
          <h2>New Contact:</h2>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              placeholder="Number"
              onChange={e => setNumber(e.target.value)}
            />
            <br/>

            <input
              className="form-control"
              placeholder="Profile Pic URL"
              onChange={e => setImgUrl(e.target.value)}
            />
            <br/>
          </div>

          <button type="button" className="btn btn-primary add-contact" onClick={handleClick}>Create Contact</button>
        </form>   
      </div> 
    </div>   
  );
}

export default AddContactForm;
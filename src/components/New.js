import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const New = ({createNew}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [img_url, setImg] = useState('');
  
  const handleCreateClick = () => {
    const generateId = () => Math.round(Math.random() * 100000000);
    const contact = {
      id: generateId(),
      name: name,
      email: email,
      phone: phone,
      img_url: img_url
    };

    if(contact.name){
      createNew(contact)
      alert(`Created contact for ${contact.name}`)
    } else {
      alert('Please enter a name')
    }

    setName('');
    setEmail('');
    setPhone('');
    setImg('');
  }
  
  return (
    <div>
      <div className="mx-auto form">
        <div className='row'>
          <Link className="col-1" to="/contacts"><button className='btn-primary back-button'>Back</button></Link>
          <h1 className='col-10'>Add contact here</h1>
        </div>

        <p>Name:</p>
        <input value={name} className="form-control mx-auto" placeholder="Name" onChange={event => setName(event.target.value)}/>
        <p>Email:</p>
        <input value={email} className="form-control mx-auto" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
        <p>Phone Number:</p>
        <input value={phone} className="form-control mx-auto" placeholder="Phone Number" onChange={event => setPhone(event.target.value)}></input>
        <p>Image URL:</p>
        <input value={img_url} className="form-control mx-auto" placeholder="Image Url" onChange={event => setImg(event.target.value)}></input>
        <Link to={"/contacts"}><button onClick={handleCreateClick} className="btn-primary create-contact" type="button">Create Contact</button></Link>
      </div>
    </div>
  )
}

export default New;
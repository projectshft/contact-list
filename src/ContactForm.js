// import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const ContactForm = (props) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [img, setImg] = useState('')

  const handleSubmitClick = (event) => {
    event.preventDefault();

    props.addContact({
      name: name,
      phone: phone,
      email: email,
      img: img,
      id: props.contacts.length
    });

    props.history.push('/contacts')

    // Reroute to Contact List with new contacts!
  }

  return (
    <div className="container">
      <h1>Contact Form!</h1>
      <form className="post-form" onSubmit={handleSubmitClick}>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}></input>
        <input type="number" placeholder="Phone Number" onChange={e => setPhone(e.target.value)}></input>
        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="Image URL" onChange={e => setImg(e.target.value)}></input>

        <button className="btn">Submit</button>
    </form>
    </div>
   

  )
}



//   return (
//     <form className="post-form">
//       <h3>Add a New Contact</h3>

//       <div className="form-group">
//         <input 
//         type="text" 
//         id="contact-name" className="form-control" placeholder="Contact Name"
//         value={this.state.name}
//         onChange={event =>
//           this.setState({name: event.target.value})}/>

//         <br/>

//         <input type="text" 
//         id="contact-email" className="form-control" placeholder="E-mail address"
//         value={this.state.email}
//         onChange={event => {
//           this.setState({email: event.target.value})}}/>

//         <br/>

//         <input type="tel" 
//         id="contact-phone" className="form-control" placeholder="Phone number"
//         value={this.state.phone}
//         onChange={event => {
//           this.setState({phone: event.target.value})}}/>
//       </div>

//       <br/>

//       <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Add Contact</button>
//     </form>
//     );
//   }


export default ContactForm;
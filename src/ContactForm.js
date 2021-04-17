import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const handleClick = () => {
    props.addContact({
      name,
      email,
      phoneNumber,
      profilePicture
    })

    props.history.push('/contacts')
  }

  return (
    <div >

      <form className="contact-form col-md-6 offset-md-3">
        <h3>Add a New Contact</h3>

        <div className="form-group">
          <input
            onChange={event => setName(event.target.value)}
            type="text" id="name-text" className="form-control" placeholder="Insert name" />

          <br />

          <input
            onChange={event => setEmail(event.target.value)}
            type="text" id="email-text" className="form-control" placeholder="Insert email" />

          <br />

          <input
            onChange={event => setPhoneNumber(event.target.value)}
            type="text" id="phone-number" className="form-control" placeholder="Insert phone number" />

          <br />

          <input
            onChange={event => setProfilePicture(event.target.value)}
            type="url" id="pic-link" className="form-control" placeholder="Insert profile picture" />
        </div>

        <button onClick={handleClick} type="button" className="btn btn-primary add-post">Add Contact</button>
        {/* <Link to='/contacts'>Contacts</Link> */}
      </form>
    </div>
  )
};

export default ContactForm

// class ContactForm extends Component {
//   constructor() {
//     super()

//     this.state = {
//       name: '',
//       email: '',
//       phoneNumber: '',
//       profilePicture: ''
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     const contact = {
//       name: this.state.name,
//       email: this.state.email,
//       phoneNumber: this.state.phoneNumber,
//       profilePicture: this.state.profilePicture
//     }
//     this.props.addContact(contact);
//   }

//   render() {
//     return (
//       <form className="contact-form">
//         <h3>Add a New Contact</h3>

//         <div className="form-group">
//           <input
//             value={this.state.name}
//             onChange={(event) => {
//               this.setState({ name: event.target.value })
//             }}
//             type="text" id="name-text" className="form-control" placeholder="Inster name" />

//           <br />

//           <input
//             value={this.state.email}
//             onChange={(event) => {
//               this.setState({ email: event.target.value })
//             }}
//             type="text" id="email-text" className="form-control" placeholder="Inster email" />

//           <br />

//           <input
//             value={this.state.phoneNumber}
//             onChange={(event) => {
//               this.setState({ phoneNumber: event.target.value })
//             }}
//             type="text" id="phone-number" className="form-control" placeholder="Inster phone number" />

//           <br />

//           <input
//             value={this.state.profilePicture}
//             onChange={(event) => {
//               this.setState({ profilePicture: event.target.value })
//             }}
//             type="url" id="pic-link" className="form-control" placeholder="Inster profile picture" />
//         </div>

//         <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Add</button>
//       </form>
//     )
//   }
// }

// export default ContactForm;

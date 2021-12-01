import React, { Component } from 'react';

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      contactName: '',
      emailAddress: '',
      phoneNumber: '',
      imageUrl: ''
    }

    this.handleClick = this.handleClick.bind(this);
  
  }

handleClick () {
  const contact = {
    contactName: this.state.contactName,
    emailAddress: this.state.emailAddress,
    phoneNumber: this.state.phoneNumber,
    imageUrl: this.state.imageUrl
  }

  this.props.addContact(contact);
}
  
  render() {
    return (
      <form className="contact-form">
        <h3>Create New Contact</h3>

        <div className="form-group">
        <input 
        type="text" 
        id="contact-name" 
        className="form-control" 
        placeholder="Enter Full Name"
        value={this.state.contactName}
        onChange={(e) => {
          this.setState({contactName: e.target.value})
        }}
        />

        <br/>

        <input 
        type="text" 
        id="email-address" 
        className="form-control" 
        placeholder="Enter E-mail Address"
        value={this.state.emailAddress}
        onChange={(e) => {
          this.setState({emailAddress: e.target.value})
        }}
        />

        <br/>

        <input 
        type="text" 
        id="phone-number" 
        className="form-control" 
        placeholder="Enter Phone"
        value={this.state.phoneNumber}
        onChange={(e) => {
          this.setState({phoneNumber: e.target.value})
        }}
        />

        <br/>

        <input 
        type="text" 
        id="image-url" 
        className="form-control" 
        placeholder="Image URL"
        value={this.state.imageUrl}
        onChange={(e) => {
          this.setState({imageUrl: e.target.value})
        }}
        />
        </div>

        <button type="button" className="btn btn-primary add-post">Post</button>
      </form>
    );
  }
}
export default ContactForm;
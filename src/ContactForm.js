import React, { Component } from 'react';

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      imageUrl: '',
      contactName: '',
      emailAddress: '',
      phoneNumber: ''
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick () {
    const contact = {
      imageUrl: this.state.imageUrl,
      contactName: this.state.contactName,
      emailAddress: this.state.emailAddress,
      phoneNumber: this.state.phoneNumber

    }
  
    this.props.addContact(contact);
  }

  render() {
    return (
      <form className="contact-form">
        <br/>
        <h3>Add a New Contact</h3>
        <br/>
        <div className="form-group">
        <h6>Full Name</h6>
          <input
          className="form-control"
          placeholder="Enter Full Name"
          value={this.state.text}
          onChange={(e) => {
            this.setState({contactName: e.target.value})
          }}
          />

        <br/>
        <h6>E-mail Address</h6>
        <input
          className="form-control"
          placeholder="Enter E-mail"
          value={this.state.user}
          onChange={(e) => {
            this.setState({emailAddress: e.target.value})
          }}
          />

        <br/>
        <h6>Phone Number</h6>
        <input
          className="form-control"
          placeholder="Enter Phone Number"
          value={this.state.user}
          onChange={(e) => {
            this.setState({phoneNumber: e.target.value})
          }}
          /> 
        
        <br/>
        <h6>Image URL</h6>
        <input
          className="form-control"
          placeholder="Image URL"
          value={this.state.user}
          onChange={(e) => {
            this.setState({imageUrl: e.target.value})
          }}
          />
        <br/>
        <button onClick={this.handleClick} type="button" className="btn btn-primary add-contact">Add Contact</button>
      </div>

        
      </form>
    );
  }
}

export default ContactForm;
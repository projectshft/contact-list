import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      profilePicture: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const contact = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      profilePicture: this.state.profilePicture
    }
    this.props.addContact(contact);
  }

  render() {
    return (
      <form className="contact-form">
        <h3>Add a New Contact</h3>

        <div className="form-group">
          <input
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value })
            }}
            type="text" id="name-text" className="form-control" placeholder="Inster name" />

          <br />

          <input
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value })
            }}
            type="text" id="email-text" className="form-control" placeholder="Inster email" />

          <br />

          <input
            value={this.state.phoneNumber}
            onChange={(event) => {
              this.setState({ phoneNumber: event.target.value })
            }}
            type="text" id="phone-number" className="form-control" placeholder="Inster phone number" />

          <br />

          <input
            value={this.state.profilePicture}
            onChange={(event) => {
              this.setState({ profilePicture: event.target.value })
            }}
            type="url" id="pic-link" className="form-control" placeholder="Inster profile picture" />
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Add</button>
      </form>
    )
  }
}

export default ContactForm;

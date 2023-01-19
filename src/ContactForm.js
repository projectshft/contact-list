import React, { Component } from 'react';

class ContactForm extends Component {
  constructor () {
    super()
  
    this.state = {
      name: '',
      email: '',
      phone: '',
      image: ''
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const contact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      image: this.state.image
    }

    if (this.state.name == "" || this.state.email == "" || this.state.phone == "" || this.state.image == "") {
      alert ("Please enter all required information");
    } else {
    this.props.addContact(contact);  
  }
}

  render() {
    return (
      <form className="post-form">
        <h3 className="text-center">Add New Contact</h3>

        <div className="container">
            <input
            className="form-control"
            placeholder="Enter Full Name"
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}
        />

        <br/>

        <input
            className="form-control"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={event => this.setState({email: event.target.value})}
        />
        
        <br/>

        <input
            className="form-control"
            placeholder="Enter Phone #"
            value={this.state.phone}
            onChange={event => this.setState({phone: event.target.value})}
        />
        
        <br/>

        <input
            className="form-control"
            placeholder="Enter Image URL"
            value={this.state.image}
            onChange={event => this.setState({image: event.target.value})}
        />

        </div>

        <br/>

        <button onClick={this.handleClick} type="button" className="btn btn-primary">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;     
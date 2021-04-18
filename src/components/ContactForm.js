import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      email: '',
      phone: '',
      avatarURL: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const generateId = () => Math.round(Math.random() * 100000000);
    const { fullname, email, phone, avatarURL } = this.state;
    if (!avatarURL || !fullname || !email || !phone) {
      alert('Please fill out all fields');
    } else {
      const { addContact } = this.props;
      const contact = {
        avatarURL,
        fullname,
        email,
        phone,
        id: generateId(),
      };
      addContact(contact);

      const { history } = this.props;
      history.push('/contacts');
    }
  }

  render() {
    const { fullname, email, phone, avatarURL } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-md-8 self-align-center">
          <form className="contact-form">
            <div className="form-group">
              <p>Full Name</p>
              <input
                className="form-control"
                placeholder="Enter Name"
                value={fullname}
                onChange={(event) =>
                  this.setState({ fullname: event.target.value })
                }
              />

              <br />
              <p>Email Address</p>
              <input
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
              <br />
              <p>Phone Number</p>
              <input
                className="form-control"
                placeholder="Enter Phone"
                value={phone}
                onChange={(event) =>
                  this.setState({ phone: event.target.value })
                }
              />

              <br />
              <p>Image URL</p>
              <input
                className="form-control"
                placeholder="Image URL"
                value={avatarURL}
                onChange={(event) =>
                  this.setState({ avatarURL: event.target.value })
                }
              />
            </div>

            <button
              onClick={this.handleClick}
              type="button"
              className="btn btn-primary"
            >
              Create New Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(ContactForm);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    console.log('click');

    const { fullname } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    const { avatarURL } = this.state;
    const { addPost } = this.props;
    const post = {
      avatarURL,
      fullname,
      email,
      phone,
    };
    addPost(post);
    console.log(this.props);
  }

  render() {
    const { fullname } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    const { avatarURL } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-md-8 self-align-center">
          <div className="h1 text-center">New Contact</div>

          <form className="post-form">
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

            <Link to="/">
              <button
                onClick={this.handleClick}
                type="button"
                className="btn btn-primary"
              >
                Create New Contact
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addPost: PropTypes.node,
};

export default ContactForm;

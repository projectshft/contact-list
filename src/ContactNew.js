import React from 'react'
import { Link } from 'react-router-dom'

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      number: '',
      profilePic: '',
      email: ''
    }

    this.handleSubmitClick = this.handleSubmitClick.bind(this)
  }

  handleSubmitClick () {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      profilePic: this.state.profilePic,
      email: this.state.email
    };
    console.log(this.props);
    console.log(this.props.addContact, newContact)
    this.props.addContact(newContact)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
                <Link to='/'>
        <button type="button" className="btn btn-primary">Back</button>
        </Link>
        
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ number: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Profile Pic</label>
        <input type='url' className='form-control'onChange={event =>
          this.setState({ profilePic: event.target.value })
        }/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>   

        <button type="button" className="btn btn-primary" onClick={this.handleSubmitClick}>Add Contact</button>
        </form>

      </div>
    )
  }
}

export default ContactNew
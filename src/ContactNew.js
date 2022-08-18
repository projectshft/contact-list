import { Link } from 'react-router-dom'
import React, { useState} from 'react'
import PropTypes  from 'prop-types';



const ContactNew = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [imageURL, setImageURL] = useState('')
    const generateId = () => Math.round(Math.random() * 100000000);
    const [id] = useState(generateId)

    const handleSubmitContactClick = () => {
    props.addContact({
      name,
      number,
      email,
      id,
      imageURL,
    })

    props.history.push('/contacts')
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          setName(event.target.value)
        }/>

        <br/>

        <label>Number</label>
        <input type='text' className='form-control'onChange={event =>
          setNumber(parseInt(event.target.value))
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          setEmail
        (event.target.value)
        }/>

        <br/>

        <label>Picture</label>
        <input type='text' className='form-control'onChange={event =>
          setImageURL
        (event.target.value)
        }/>
        <br/>

        <button type="button" onClick={handleSubmitContactClick}>Submit</button>
      </form>

      <button type="button"><Link to='/contacts'>Contacts</Link></button>
    </div>
  )
};

ContactNew.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.number,
  imageURL: PropTypes.string,
}

export default ContactNew
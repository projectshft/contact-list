import { useState } from 'react';
import PropTypes from 'prop-types';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: 24,
      image_url: 'https://images.ctfassets.net/usf1vwtuqyxm/40Sp4ysyqcYKkQSwWG8WI6/8fa8b6ffdb3490d62c722d056b8bec48/Dragon-calendar-carousel.jpg?fm=jpg&q=70&w=2560',
      email: 'cdebon97@gmail.com',
      phone_number: 2342343242
    }
  ])
  
  contacts.PropTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.number
  }
  
  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    })
  }
}

export default Contacts
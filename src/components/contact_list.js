import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactList = (props) => {
  const [contacts, setContacts] = useState(props.passFromMain);

  const history = useHistory();
  const handleClick = (passedId) => (event) => {
    history.push(`/contacts/${passedId}`);
  }

  return (
    <div className="container">
      <Link to="/contacts/new" type="button" className="btn btn-primary">Add Contact</Link>
      <table className="table table-bordered table-hover">
        <thead className="table table-light">
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(element => (
            <tr key={element.id} onClick={handleClick(element.id)}>
              <td><img src={element.image_url} className="prof-pic" alt=""></img></td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

ContactList.propTypes = {
  passFromMain: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ContactList
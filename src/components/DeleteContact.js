import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/esm/Button';

const DeleteContact = (props) => {
  const history = useHistory();
  const { contacts, id, setContacts } = props;
  const deleteContact = (array, idToDelete) => {
    const arrayMinusOne = array.filter((cont) => cont.id !== idToDelete);
    return arrayMinusOne;
    // console.log(arrayMinusOne);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    const newShorterContacts = deleteContact(contacts, id);
    setContacts(newShorterContacts);
    history.push('/');
  };

  return (
    <div className="container">
      <h2>OMG are you sure??</h2>
      <Button variant="danger" onClick={handleDelete}>
        Yes, Please delete
      </Button>
    </div>
  );
};

DeleteContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fName: PropTypes.string,
      lName: PropTypes.string,
      imageUrl: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
  id: PropTypes.number,
  setContacts: PropTypes.func,
};

export default DeleteContact;

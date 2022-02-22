import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContactsList from './ContactsList.js';
import Contact from './Contact.js';

const Index = (props) => {
  const { contacts, children } = props;

  return (
    <Routes>
      <Route path="/" element={<ContactsList contacts={contacts} />} />
      <Route path=":contact_id" element={<Contact contacts={contacts} />} />
      {children}
    </Routes>
  );
};

Index.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element,
};

export default Index;

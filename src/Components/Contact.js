import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import ContactEdit from './ContactEdit';

// TODO: add error handling if id doesn't exist

const Contact = ({ contact, contactList, setContactList }) => (
  <Switch>
    <Route path="/contacts/:id/edit">
      <ContactEdit
        contactId={contact.id}
        contactName={contact.name}
        contactImageUrl={contact.image_url}
        contactEmail={contact.email}
        contactPhoneNumber={contact.phone_number}
        contactList={contactList}
        setContactList={setContactList}
      />
    </Route>

    <Route path="/contacts/:id">
      <ContactInfo
        contactId={contact.id}
        contactName={contact.name}
        contactImageUrl={contact.image_url ? contact.image_url : undefined}
        contactEmail={contact.email}
        contactPhoneNumber={contact.phone_number}
      />
    </Route>
  </Switch>
);

Contact.propTypes = {
  contact: PropTypes.object,
  contactList: PropTypes.array,
  setContactList: PropTypes.func,
};

export default Contact;

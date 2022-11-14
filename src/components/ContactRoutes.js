import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import EditContact from './EditContact';
import ContactId from './ContactId';

const ContactRoutes = ({
  setCurrentContact,
  contactInfo,
  deleteContact,
  editContact,
}) => (
  <div>
    <Switch>
      <Route
        path="/:contactid/edit"
        render={(routerProps) => (
          <EditContact
            editContact={editContact}
            contactInfo={contactInfo}
            history={routerProps.history}
          />
        )}
      />
      <Route
        path="/:contactid"
        render={(routerProps) => (
          <ContactId
            setCurrentContact={setCurrentContact}
            contactInfo={contactInfo}
            deleteContact={deleteContact}
            editContact={editContact}
            history={routerProps.history}
          />
        )}
      />
    </Switch>
  </div>
);

ContactRoutes.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
  editContact: PropTypes.func.isRequired,
  setCurrentContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactRoutes;

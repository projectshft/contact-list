import { object, PropTypes } from 'prop-types';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, deleteContact }) => (
  <div>
    <div className="flex-1 border-b pb-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Contacts</h1>
    </div>
    {contacts.map((contact) => {
      const { id, name, email, phone, image } = contact;

      return (
        <div key={id}>
          <ContactCard
            id={id}
            name={name}
            email={email}
            phone={phone}
            image={image}
            deleteContact={deleteContact}
          />
        </div>
      );
    })}
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

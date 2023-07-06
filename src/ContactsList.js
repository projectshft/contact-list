import Contact from "./Contact";

const ContactsList = (props, { contacts }) => {
  const contactListItems = props.contacts.map((contact, index) => {
    return <Contact key={index} contact={contact} />;
  });

  if (contacts) {
    return <ul>{contactListItems}</ul>;
  } else {
    return <h3>No contacts have been added yet</h3>;
  }
};

export default ContactsList;

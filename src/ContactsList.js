import Contact from "./Contact";

const ContactsList = (props) => {
  const contactListItems = props.contacts.map((contact, index) => {
    return <Contact key={index} contact={contact} />;
  });
  return <ul>{contactListItems}</ul>;
};

export default ContactsList;

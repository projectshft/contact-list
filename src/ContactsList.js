import Contact from "./Contact";

const ContactsList = (props) => {
  const contactListItems = props.contacts.map((contact, index) => {
    return <Contact key={index} contact={contact} />;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>{contactListItems}</tbody>
    </table>
  );
};

export default ContactsList;

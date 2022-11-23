import ContactNew from "./ContactNew";
import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const Contacts = () => {
  // Test data for contact list.
  const test1 = {
    id: 101,
    name: "Christopher Robin",
    image_url:
      "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
    email: "crobin@gmail.com",
    phone_number: "7557557557",
  };
  const test2 = {
    id: 102,
    name: "John Jacob",
    image_url:
      "https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1100-c50.jpg",
    email: "jdog@gmail.com",
    phone_number: "5033667986",
  };
  const test3 = {
    id: 405,
    name: "Richard James",
    image_url: "https://static.tvtropes.org/pmwiki/pub/images/homeimage.jpg",
    email: "otheremail@gmail.com",
    phone_number: "8485968298",
  };

  // Using hooks to create a new state for the contact list with the new contact added.
  const [groupedContacts, setGroupContacts] = useState([test1, test2, test3]);
  const [showlist, setShowList] = useState(true);

  const handleNewContact = (contact) => {
    setGroupContacts([...groupedContacts, contact]);
    // console.log(groupedContacts);
    setShowList(true);
  };

  const toggleForm = () => {
    setShowList(!showlist);
  };
  const contacts = groupedContacts.map((item, index) => (
    <tr key={index}>
      <td>
        <img src={item.image_url} width="150px"></img>
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone_number}</td>
    </tr>
  ));

  return (
    <div>
      {showlist && (
        <Table className="table table-bordered">
          <tbody>{contacts}</tbody>
        </Table>
      )}
      {!showlist && (
        <ContactNew handleNewContact={handleNewContact} goBack={toggleForm} />
      )}
      <Button onClick={toggleForm} className="contact-add" variant="primary">
        Add Contact
      </Button>
    </div>
  );
};

export default Contacts;

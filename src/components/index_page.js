import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ContactNew from '../components/contact_new';
import Contact from '../components/contact';

const Index = () => {

  const [contacts, setContacts] = useState(
    [
      {
        "id": 70219577,
        "name": "Albert Einstein",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        "email": "aeinstein@example.com",
        "phone_number": "15555555555"
      }
    ]
  );

const addContact = (x) => {
  setContacts(contacts.concat(x));
}

  return (
  <div>

    <div className="container">
      <Link to="/contacts/new" type="button" className="btn btn-primary">Add Contact</Link>
      <Link to="contacts/id" type="button" className="btn btn-warning">Ind. Page</Link>
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
          <tr key={element.name}>
            <td><img src={element.image_url} className="prof-pic" alt=""></img></td>
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>{element.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <Switch>
    <Route path="/contacts/new" render={() => (
    <ContactNew passNewContact={addContact} />
    )} />
    <Route path="/contacts/:id" component={Contact} />
  </Switch>

</div>
  )
};

export default Index
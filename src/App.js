import React, { useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import New from './components/New';
import ViewContact from './components/ViewContact';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = (props) => {
  return (
    <div>
      <div className='header'>
        <h1 className='contact-title'>Contact List</h1>
        <Link to="/contacts/new" className="add-button" type='btn btn-primary'><button className="btn-primary">Add Contact</button></Link>
      </div>
      
      <table className="table table-striped table-bordered" id="contacts-table">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map(p => (
            <tr key={p.id}>
              <th scope="row">
                <img src={p.img_url} alt="profile pic here" width="200"></img>
              </th>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Main = (props) => {
  const [contacts, setContact] = useState([]);

  const createNew = (c) => {
    if(c){
      setContact(contacts.concat(c))
    };
  }
  return (
    <main>
      <Routes>
       <Route exact path="/contacts/*" element={<Contacts createNew={createNew} contacts={contacts} />}/>
        <Route path="/contacts/new" element={<New createNew={createNew} />}/>
        <Route path="/:id" element={<ViewContact />}/>
      </Routes>
    </main>
  )
}

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
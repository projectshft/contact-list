import { Switch, Route, Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Button from './Button';
import New from './New';



const Contacts = ({ contacts, addContact }) => {
  const history = useHistory();
  const handleClick = () =>{ 
    console.log('click')
    let path = `/contacts/generatedId`; 
    history.push(path);
  }
  const {generateId} = () => (Math.round(Math.random() * 100000000));
  console.log(`${generateId}`);

  return(
    <div>
      <Header />
      <Button />
      <div className="col-md-8 offset-md-2 padding">
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Profile Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(p => (
              <tr onClick={handleClick} key={7}>
                <td>{p.url}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>


      <Link to="/contacts/new">New</Link>
      <Switch>
        <Route
          path="/contacts/new"
          render={(props) => (
            <New
              history={props.history}
              contacts={contacts}
              addContact={addContact}
            />
          )}
        />
      </Switch>
    </div>
  )
};

export default Contacts;

import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header';
import Button from './Button';

const Contacts = ({ contacts, addContact }) => {
  const history = useHistory();
  const handleClick = () =>{ 
    let path='/contacts/info'
    history.push(path);
    return contacts;
  }
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
              <tr onClick={handleClick} key={p.name}>
                <td><img className="img  box" src={p.url} alt="" /></td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  )
};

export default Contacts;

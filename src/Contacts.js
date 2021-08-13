import ContactTable from './ContactTable';
import React, {useState} from 'react';

//TODO: PropTypes

function Home() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Otto Frankel',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Sans_undertale.jpg/220px-Sans_undertale.jpg',
      email: 'otto@email.com',
      number: '111-3333'
    },
    {
      id: 2,
      name: 'The Rock',
      imgUrl: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
      email: 'dwayne@therock.com',
      number: '222-1234'
    }
  ]);

  return (
    <div>
      <div className="row">      
        <div className="col-md-6 offset-md-3">
          <h1>Contact List</h1>
          <button className="add-btn btn btn-primary">Add Contact</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ContactTable contacts={contacts}/>
        </div>
      </div>
    </div>
  );
}

export default Home;

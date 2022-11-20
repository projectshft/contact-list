// import Main from './components/Main';
// import Contacts from './components/Contacts';
import './App.css';
import { useState, useEffect } from 'react';

function App () {
  const [data, setData] = useState(null);
 
  // Pass in [] so that fetch only runs once 
  useEffect(() => {
    // fetch('https://randomuser.me/api/')
    fetch('https://reqres.in/api/users?')
    // fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(response => setData(response.data))
      .then((data) => { 
        console.log('Logging data: ' + data);
      })
      .catch((error) => console.log(error))
    }, []);
 
  return (
    <>
      <div className="App">
        {/* <h1>Contact List</h1>
        <button>Add New Contact</button> */}

        <div className="contacts-container">
          <div className="cards">
            <div>{data && data.map((contact) => {
              return <>
                <div key={contact.id}>
                  <p>{contact.email}</p>
                </div>
              </>
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



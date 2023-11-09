import './App.css';
import  AddContact  from './AddContact';
import  ContactInfo  from './ContactInfo';
import  ContactList  from './ContactList';
import React, { useState }  from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
//mucho importing 


const App = () => {
  const [contacts, setContacts] = useState (
    [
      {
        id: 70219577,
        name: "Albert Einstein",
        photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVHlg2A2iP8rkLDDlZasabaW67-oCMv-ExrLzyWbjrjLigtVCcYTa50_8eQ3B_BiK6Fc&usqp=CAU",
        email: "aeinstein@example.com",
        phone_number: "15555555555"
      },
      {
        id: Math.round(Math.random() * 100000000),
        name: "Alby Einy",
        photo_url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/z_Projects_in_progress/050418_Einstein/050405_einstein_tongue.jpg",
        email: "aeinstein@example.com",
        phone_number: "15555555556"
      },
      {
        id: Math.round(Math.random() * 100000000),
        name: 'Derek Zoolander',
        photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rqZ7FsLUzzqSJ9brWjJ5-3RuBdWw4mQpzA&usqp=CAU',
        email: 'DerekZ@Zoolandy.com',
        phone_number: '3245673332'
      }
    ]
  )

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    setContacts(updatedContacts)
  }//want to make sure these are available for children componenets
  
  return (//creating the routes and header for the page. making sure to pass all the components/functions to necessary routes
  <div className='App-container'>
    <div className='row'>
      <header>
        <h1>Contact List</h1>
      </header>
      <div>
        <Switch>
          <Route exact path='/contactlist' render = {() => (<ContactList  contacts={contacts} addContact={addContact} deleteContact={deleteContact}/>)}/>
          <Route path='/contactlist/:Profile' render = {(routerProps) => (<ContactInfo id={routerProps.match.params.Profile} contacts={contacts}></ContactInfo>)}/>
          <Route path='/addcontact' render= {() => <AddContact addContact={addContact}></AddContact>}/>
        </Switch>
      </div>
    </div>
  </div>
  )
  }

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo_url: PropTypes.string.isRequired,
  })
  ).isRequired,
}

export default App;
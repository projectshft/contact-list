import { Switch, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Contacts from './Contacts'


const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Bear Bryant", number: "1234567890", email: "bear@bryant.com", imageURL: "https://cdn.britannica.com/96/196196-050-56B5F4D3/Bear-Bryant-1980.jpg"},
    { id: 2, name: "Nick Saban", number: "3216549870", email: "nick@saban.com", imageURL: "https://th.bing.com/th/id/R.317b2128824a3e7213a4aa077f088684?rik=X%2b2zMvhIFObfxw&pid=ImgRaw&r=0" },
    { id: 3, name: "Bobby Brown", number: "9876543210", email: "bobby@brown.com", imageURL: "https://th.bing.com/th/id/R.9107efc0fc55868b09913a1af7f4ef5e?rik=Y0Fc9o%2fKTefMlg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f38200000%2fBobby-Brown-bobby-brown-38268330-1165-1600.jpg&ehk=6DB9Lo6rrYhS2MawzbieWOFia8Mmufes7dkQS0UXm7U%3d&risl=&pid=ImgRaw&r=0" },
  ])

  const addContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    });
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Contacts}/>
        <Route path='/contacts' render={() => (
          <Contacts addContact={addContact} contacts={contacts} />
        )}/>
      </Switch>
    </div>
  )
}

export default App
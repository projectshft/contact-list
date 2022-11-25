import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Roster from './Roster'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { number: 1658982737, name: "Random Guy I met in bar", profilePic: "https://static7.depositphotos.com/1298242/789/i/600/depositphotos_7894119-stock-photo-smiling-hispanic-man-headshot.jpg", email: "michaelguy@gmail.com"},
        { number: 2947234432, name: "Bruce Lee", profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/440px-Bruce_Lee_1973.jpg", email: "bewater@gmail.com"},
        { number: 1213234354, name: "Patrick Bateman", profilePic: "https://cdn.mos.cms.futurecdn.net/PzPq6Pbn5RqgrWunhEx6rg.jpg", email: "xclusive@gmail.com"}
      ]
    }
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact (contact) {
    console.log(contact);
    this.setState({contact: this.state.contacts.push([contact])});
  }

  render() {
    return (
  <div>
        <Switch>
          <Route path='/' render={() => (
            <Roster addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}


export default App



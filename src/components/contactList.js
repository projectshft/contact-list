import React, { Component } from 'react';

class ContactList extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <><h1>Contact List</h1>
{/* /* //  Full Name
//  Email address
//  Phone Number
//  Image URL
//  Add Contact blue button */ }
      <div>
      <input type="text" placeholder="Full Name" />
      </div>
      <div>
      <input type="text"  placeholder="Email address" />
      </div>
      <div>
      <input type="text"  placeholder="Phone Number" />
      </div>
      <div>
      <input type="text"  placeholder="Image URL" />
      </div></>
      
      
    

    )
  }
}

export default ContactList;

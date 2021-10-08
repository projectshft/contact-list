import { Link } from 'react-router-dom';
import React from 'react';

import ReactDOM from 'react-dom';


const ContactList = props => {
    const ContactAPI = {
        contacts: [
          { pic: 'https://www.looper.com/img/gallery/the-entire-history-of-dunes-house-atreides/intro-1602509817.jpg', name: 'Paul Atreides', email: 'muaddib@gmail.com', phone: '5555555' },
          { pic: 'https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1310/1/1311717.jpg', name: 'Chani', email: 'fremen#1@gmail.com', phone: '2222222'}
        ],
        all: function() {
          return this.contacts;
        },
        get: function(id) {
          const isContact = p => p.number === id;  //Confused as to how this is working.  Need ID in API
          return this.contacts.find(isContact);
        }
      };
    
    
    
    return (        
        <section>
        <Link to="/addcontact">Add Contact</Link>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Profile Pic</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={ContactAPI.contacts[0].pic}></img></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>


        </table>

        



        </section>
        
    )
};

export default ContactList;

/*
<div class="row">
            <div class="col">Profile Pic</div>
            <div class="col">Name</div>
            <div class="col">Email</div>
            <div class="col">Phone Number</div>
        </div>

        */
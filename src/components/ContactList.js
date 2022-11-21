import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import './ContactList.css';

const ContactList = ({ name, phone, email }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=10');
      const {results} = await res.json();
      setData(results);
    };
    fetchData();
  }, []);

  return (

    <div className="list-container">
      <div className="header">
        <h1>Contact List</h1>
        <p>
        <Link to="/form">
          <button className ="new-contact">New Contact</button>
        </Link>
        </p>
      </div>

        <div className="contact-info-new">

          <div className="leftside">
            <img src={profile} className="profile" height='90px' width='90px'alt={name}/>
          </div>

          <div className="rightside">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
            <p className="phone">{phone}</p>
          </div>
        
        </div>
     
     {
       data && data.length > 0 && data.map((item) => 
       
       <div className="contact-info">

        <div className="leftside">
          <img src={item.picture.medium} className="photo" alt={item.name}/>
        </div>

        <div className="rightside">
          <p className="name">{item.name.first} { item.name.last}</p>
          <p className="email">{item.email}</p>
          <p className="phone">{item.phone}</p>
        </div>

       </div>
       
       )
     }
    </div>
  );
}

export default ContactList;
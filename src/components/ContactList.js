import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContactList.css';

function ContactList() {
  const [data, setData] = useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        setData(data)
      });
    }
  
    useEffect(()=>{
      getData()
    },[])


  return (

    <div className="list-container">
      <h1>Contact List</h1>
        <Link to="/form">
          <button className ="new-contact">New Contact</button>
        </Link>
     {
       data && data.length > 0 && data.map((item) => 
       
       <div className="contact-info">

        <div className="leftside">
          <img src={item.image} className="photo" alt={item.name}/>
        </div>

        <div className="rightside">
          <p className="name">{item.name}</p>
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
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Table from 'react-bootstrap/Table'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./NotFound"; 
import NewContact from "./NewContact"; 
import sample from "./sample.json"; 



const App =()=> {
 

  return (
    <>
    <nav>
    <h1> Contact List </h1>
        <ul> 
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="contact/new">Add Contact</Link>
            </button>
        </ul>
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="contact/new" element={<NewContact />} />
    </Routes>
    
    </>
  );
}


const Home = (navigateToContactInfo) => { 

  return(
    <Table striped bordered hover className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Profile Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {sample.contacts.map((contactInfo)=> (
          <tr className="preview" key={contactInfo.id} >
          <td>{ contactInfo.id }</td>
          <td> <img src={contactInfo.profileUrl} fluid rounded
          width={200} height={200}  alt="Profile" />
          </td>
          <td>{ contactInfo.name }</td>
          <td>{ contactInfo.email }</td>
          <td>{ contactInfo.phoneNumber }</td>
        </tr>      
      ))}   
      </tbody>  
    </Table>
  )
}

export default App;

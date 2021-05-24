import React, { useContext } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import UserContext from "../context/User";

// I was going to use this component for the contact view couldnt get the id to update the state
// so i was going to try to grab the indexed on click of a button and route to this component

 const Contact = () => {

  // params for id
  const {contactId} = useParams()
  const { userList } = useContext(UserContext);

  const history = useHistory()

  // filter to grab specific contact id according to params
  const contact = userList.filter((contact) => contact.id == contactId)
   

  // deletes contact
  const deleteContact = () => {
    
    const itemToBeRemoved = {...contact}

    userList.splice(userList.findIndex(contact => contact.id == itemToBeRemoved.id) , 1)

    history.push('/contacts')

  }
  
// contact card
// edit routes to home for now
// delete works
  return (
  <div className="card mx-auto text-center" style={{width: "20rem"}}>
  <img src={contact[0].imageUrl} className="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{contact[0].name}</h5>
    <h5 class="card-title">{contact[0].email}</h5>
    <h5 class="card-title">{contact[0].number}</h5>
    <div className="row">
      <Link className="col" to={'/contacts'} >Home</Link>
      <Link className="col" to={'/contacts'} >Edit</Link>
      <Link className="col" onClick={deleteContact} >Delete</Link>
    </div>
  </div>
</div>
  )
}


export default Contact;

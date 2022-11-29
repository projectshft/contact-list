import React from "react";
import { useLocation, Link } from "react-router-dom";


// useLocation is how I was able to correct route to the targeted contact
const DisplayContact = ({contacts}) => {

  // location object that is the current URL
  const location = useLocation();

  // current index is going to be at the end of the location.pathname string so replace everything up to the index
  let index = parseInt(location.pathname.replace('/contacts/', ''));
  

  //with the correct index set, displaying the correct contact and its information
  return (
    <div className="displayed">
      <img src={contacts[index].image_url} alt=""/>
      <label>{contacts[index].name}</label>
      <label>{contacts[index].email}</label>
      <label>{contacts[index].phone_number}</label>
      <Link to="/"><button className="btn btn-danger">Back</button></Link>
    </div>
  )
}

export default DisplayContact
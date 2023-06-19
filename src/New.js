import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import PropTypes from "prop-types";
import axios from 'axios';


const apiKey = 'wVOP1uQI4HpLgUeaYdwvFeRSKYqWPn5QXGXK3Ruw-kE'

//The "New" component takes values from input fields and sets them as state. Then when you click submit it will push a new contact object to the data.json file
function New () {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [image_url, setImage] = useState("")

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleImageChange(e){
    setImage(e.target.value)
  }

  const generateId = () => Math.round(Math.random() * 100000000);

  //I thought the image was supposed to be some sort of api request which is why I put the axios call in here
  
  const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
  const params = {
    method: "get",
    orientation: "portrait",
    query: "person",
    w: 20,
    h:30 
  }

  // const getImage = async () => {
  //   await axios.get(url, { params: params })
  //     .then(response => {
  //       // console.log("api response", response.data.urls.small)
  //         const image_url = response.data.urls.thumb
  //         setImage(image_url)
  //     })
  //     .catch(err => console.error(err))
  //   }

  // const getImage = async () => {
  //   await axios.get(url, {params: params})
  //   .then(response => {
      
  //     let image_url = response.data.urls.small
  //     console.log(typeof image_url)
  //     setImage(image_url)
  //   })
  // }

// useEffect(()=> {
//     getImage()
//     // handleSubmitClick()
//   },[])
    
    function handleSubmitClick(n) {
      // getImage()
      
      n = name;
      console.log(name, email, phone_number);
      console.log("new data", data.contacts);
      data.contacts.push({
        id: generateId(),
        name: name,
        image_url: image_url,
        email: email,
        phone_number: phone_number,
      });
      
    }
  
//Form to fill out when creating a new contact
  return (
    <form className="post-form">
      <h3>Create New Contact</h3>
      <hr />
      <div className="form-group">
        <p>Full Name</p>
        <input
          value={name}
          onChange={handleNameChange}
          className="form-control"
          placeholder="Name"
        ></input>
      </div>
      <br />
      <div className="form-group">
        <p>Email address</p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="form-control"
          placeholder="email"
        ></input>
      </div>
      <br />
      <div className="form-group">
        <p>Phone Number</p>
        <input
          value={phone_number}
          onChange={handlePhoneNumberChange}
          className="form-control"
          placeholder="Phone Number"
        ></input>
      </div>
      <br />
      <div className="form-group">
        <p>Image URL</p>
        <input
        
          value={image_url}
          onChange={handleImageChange}
          className="form-control"
          placeholder="Image URL"
        ></input>
      </div>
      <br />
      <Link to={"/"}>
        <button
          onClick={() => {
            handleSubmitClick();
            // getImage();
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </Link>
      <Link className="offset-md-10" to={"/"}>
        Back
      </Link>
    </form>
  );
};

New.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
}

export default New;
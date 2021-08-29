import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const AddPost = ({ contacts, addContact }) => {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const generateId = () => Math.round(Math.random() * 100000000);

    const data = {
      picture,
      email,
      name,
      phone,
      id: generateId() 
    };

    addContact(data);
    history.push("/contacts");
  };

  return (
    <div className="container-fluid">
      <h4 className="text-center">New Contact Form</h4>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <input
                className="form-control"
                type="url"
                placeholder="Picture URL  "
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
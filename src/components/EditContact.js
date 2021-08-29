import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setPicture(currentContact.picture)
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      id: currentContact.id,
      picture,
      email,
      name,
      phone,
    };

    updateContact(data);
    history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="row">
         <div className="col-md-6 p-5">
           <h4>New Contact</h4>
           <br></br>
          {currentContact ? (
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
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
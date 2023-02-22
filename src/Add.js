import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const submitInformation = (e) => {
    e.preventDefault();
    const newContact = { image, name, phone, email };
    const contacts = window.localStorage.getItem("contacts");
    const safeContacts = contacts ? JSON.parse(contacts) : [];
    safeContacts.push(newContact);
    window.localStorage.setItem("contacts", JSON.stringify(safeContacts));
    history.push("/");
  };

  return (
    <div className="addContact">
      <h2 className="addtitle">Add Contact</h2>
      <form onSubmit={submitInformation}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            ImageURL
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddContact;

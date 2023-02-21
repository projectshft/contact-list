import { useState } from "react";

const AddContact = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");


  const submitInformation = (e) => {
    e.preventDefault();
    const newContact = { image, name, phone, email, id };

    fetch("db/users.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    }).then(() => console.log(newContact));
  };

  return (
    <div className="addcontact">
      <form onSubmit={submitInformation}>
        <input
          className="form-control form-control-lg"
          type="text"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="ImageURL"
        />
        <input
          className="form-control form-control-lg"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="form-control form-control-lg"
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          aria-label=".form-control-lg example"
        />
        <input
          className="form-control form-control-lg"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          aria-label=".form-control-lg example"
        />
        <input
          cassName="form-control form-control-lg"
          type="text"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="button" className="btn btn-primary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;

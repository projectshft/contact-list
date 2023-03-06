import { useState } from "react";
import { useContactsDispatch } from "./Context";
import { useHistory } from "react-router-dom";
import { formatNumber } from "../helpers";

const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useContactsDispatch();
  const history = useHistory("/")
  


  return (
    <div className="addContact">
      <div className="container text-center">
          <div className="row">
            <div className="addTitle col">Add Contact</div>
            <form className="addForm">
            <div className="row">
              <div className="col">
              <input type="text" className="form-control" required placeholder="Name" value={name} onChange={e =>setName (e.target.value)}></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <input type="text" className="form-control" required placeholder="Phone" value={phone} onChange={e =>setPhone (formatNumber(e.target.value))}></input>
              </div>
            </div>
            <div className="row">
              <div class="col">
              <input type="text" class="form-control" required placeholder="Email" value={email} onChange={e =>setEmail (e.target.value)}></input>

              </div>
            </div>
            <div className="row">
              <div class="col">
              <input type="text" class="form-control" required placeholder="Avatar" value={image} onChange={e =>setImage (e.target.value)}></input>
              <button onClick = {(e) => {
                e.preventDefault();
                setName("")
                setPhone("")
                setEmail("")
                setImage("");
                dispatch({
                  type: "added",
                  id: nextId++,
                  name: name,
                  phone: phone,
                  email: email,
                  image: image
                });
                history.push("/")
              }}
                type="button" className="btn btn-primary">Add</button>
              </div>
            </div>
            </form>
          </div>
      </div>
    </div>
  );
};

let nextId = 2;

export default Add;

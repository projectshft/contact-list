import { useState, useContext } from "react";
import { useContactsDispatch } from "./Context";

const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const[image, setImage] = useState("");

  function handleSubmit(e) {

  }
  return (
    <div className="addContact">
      <div class="container-fluid">
        
      </div>

    </div>
    );
}
 
export default Add;
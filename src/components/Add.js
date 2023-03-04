import { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const[image, setImage] = useState("");

  function handleSubmit(e) {
    
  }
  return (
    <div className="addContact"></div>
    );
}
 
export default Add;
import React from 'react';
import { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [name, email, phoneNum, image] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


export default function Forms() {

  const [pic, setPic] = useState('picUrl');
  const [name, setName] = useState('Patrick');
  const [email, setEmail] = useState('niceguy@gmail.com');
  const [phoneNum, setPhone] = useState(1234567890);


  const handleClick = () => {
    setPic('headshot');
    setName('Ryan');
    setEmail('ryan@yahoo.com');
    setPhone(2325554444);
    console.log(pic, name, email, phoneNum);
  };
  return (
    <form className="post-form">
      <h3>Create A Contact</h3>

      <div className="form-group">
        <label for="fullName">Full Name</label>
        <input
          // value={name} 
          onChange={event => setName({name: event.target.value})}
          type="text" id="search-name" className="form-control" placeholder="Full Name" />

        <br />
        <label for="inputEmail1">Email address</label>
        <input
          // value={email}
          onChange={event => setEmail({email: event.target.value})}
          type="text" id="post-user" className="form-control" placeholder="Email Address" />
        <br />
        <label for="phoneNumber">Phone Number</label>
        <input
          // value={phoneNum}
          onChange={event => setPhone({phoneNum: event.target.value})}
          type="text" id="post-text" className="form-control" placeholder="Phone Number" />

        <br />
        <label for="image-url">Image URL</label>
        <input
          // value={pic}
          onChange={event => setPic({pic: event.target.value})}
          type="url" id="post-user" className="form-control" placeholder="Image URL" />
      </div>
      <button type="button" className="btn btn-primary add-post" onClick={handleClick}>Add Contact</button>
    </form>
  );
}



// constructor () {
//   super()

//   this.state = {
//     user: '',
//     text: ''
//   }
// }
//example of class need to change to hook
//useState needs to be import as component

// import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [name, email, phoneNum, image] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
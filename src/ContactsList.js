import { Link } from 'react-router-dom'


const ContactsList = ({ contacts }) => (
  <div className="container">

    <table className="table table-bordered col-md-6 offset-md-3">
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>


      <tbody>
        {contacts.map(contact => (
          <tr key={contact.number}>
            <Link to={`/contacts/${contact.number}`}>
              <td>
                <img className="profile-picture" src={contact.profilePicture} width="150" ></img>
              </td>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="addNewButton col-md-6 offset-md-3">
      <Link to='/contacts/new'>Add New Contact</Link>
    </div>

  </div>
);

export default ContactsList

// const ContactsList = ({ contacts }) => (
//   contacts.map(c => (
//     <div>
//       <Link to={`/contacts/${c.number}`}>
//         <table className="table table-bordered col-md-6 offset-md-3">
//           <thead>
//             <tr>
//               <th>Profile Picture</th>
//               <th>Name</th>
//               <th>Phone Number</th>
//               <th>Email Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             <td>
//               <img className="profile-picture" src={c.profilePicture} width="150" ></img>
//             </td>
//             <td>{c.name}</td>
//             <td>{c.phoneNumber}</td>
//             <td>{c.email}</td>

//           </tbody>
//         </table>
//       </Link>
//       <Link to='/contacts/new'>Add New Contact</Link>
//     </div>
//   ))
// );

// export default ContactsList
import { Link } from 'react-router-dom'

const ContactsList = ({ contacts }) => (
  <div className="col-md-6 offset-md-3">
    {
      contacts.map(c => (
        <Link to={`/contacts/${c.number}`}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Profile Picture</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email Address</th>
              </tr>
            </thead>
          </table>

        </Link>
      ))
    }
  </div>
)
export default ContactsList

  // <table className="table table-bordered">
  //   <thead>
  //     <tr>
  //       <th>Profile Picture</th>
  //       <th>Name</th>
  //       <th>Phone Number</th>
  //       <th>Email Address</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {contacts.map(c => (
  //       <td key={c.index} > </td>
  //     ))}
  //   </tbody>
  // </table>




// const ContactsList = (props) => {

//   const contactItems = props.contacts.map((contact, index) => {
//     return (
//       <Contact key={index} contact={contact} />
//     )
//   })
//   return (
    // <table className="table table-bordered">
    //   <thead>
    //     <tr>
    //       <th>Profile Picture</th>
    //       <th>Name</th>
    //       <th>Phone Number</th>
    //       <th>Email Address</th>

    //     </tr>
    //   </thead>
    //   <tbody>
    //     {contactItems}
    //   </tbody>
    // </table>
//   )
// }

// export default ContactsList
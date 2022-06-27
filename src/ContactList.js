// import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// const FullContactList = ({contacts}) => (
//   <div>
   
//     <ul>
//       {
//         contacts.map(p => (
//           <li key={p.number}>
//             <Link to={`/Roster/${p.number}`}>{p.name}</Link>
//           </li>
//         ))
//       }
//     </ul>
//     <Link to='/contactNew'><button type="button"> New Contact </button></Link>
//   </div>
// )

// export default FullContactList



const FullContactList = ({contacts}) => (
  
  <div>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Profile Pic</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>

      </tr>
      { contacts.map( p=> (
          <tr key={p.number} > 
            <Link to={`/Roster/${p.number}`}>{p.name}</Link>
            <td>{contacts.profilePic}</td>
            <td>{contacts.name}</td>
            <td>{contacts.email}</td>
            <td>{contacts.phoneNumber}</td>
          </tr>
        )
      )

      }

    </tbody>
    </table>
    <Link to='/contactNew'><button type="button"> New Contact </button></Link>

  </div>
  );
  


export default FullContactList

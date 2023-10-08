import ContactRows from './contact-rows'
import { useNavigate } from 'react-router-dom'

const ContactTable = (props) => {
  // New Contact form navigation
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/new")
  }

return (
  <div className = "col-md-8 offset-2">
    <h1 className='mt-4 h1 text-center'>Contact List</h1>
    <table className="mt-3 table">
    <thead>
     <tr>
        <th className = "text-center" >Profile Pic</th>
        <th className = "text-center" >Name</th>
        <th className = "text-center" >Email</th>
        <th className = "text-center" >Phone Number</th>
     </tr>
   </thead>
    <tbody>
      <ContactRows contacts = {props.contacts}/>
    </tbody>
    </table>
    <button className='btn btn-primary' onClick={HandleClick}> New Contact </button>
  </div>
)
}

export default ContactTable;
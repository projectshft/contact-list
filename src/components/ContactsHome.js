import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
//4 columns using bootstrap and a button for adding contact

const ContactsHome = ({contacts}) => {
  const ref = (id) => `contact/${id}`
  
  return(
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map(c => (
              <tr key={c.id}>
                <th>
                  <img src={c.image_url} alt="headshot" width="50" height="80"/>
                </th>
                <td>
                  <Link to={()=>ref(c.id)}>
                    {c.name}
                  </Link>
                </td>
                <td>
                  {c.email}
                </td>
                <td>
                  {c.phone_number}
                </td>
              </tr>
            )
          )
        }
      </tbody>
    </table>
  )
}

ContactsHome.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactsHome;
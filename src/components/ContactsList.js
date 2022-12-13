import { useHistory } from "react-router-dom"
import PropTypes from "prop-types";

const ContactsList = ({contacts}) => {
  
  const history = useHistory();


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
              <tr key={c.id} onClick={() => history.push(`/contact/${c.id}`)}>
                <th>
                  <img src={c.image_url} alt="headshot" width="80" height="100"/>
                </th>
                <td>
                  {c.name}
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

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactsList;
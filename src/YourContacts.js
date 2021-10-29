import PropTypes from 'prop-types';

const YourContacts = ({ contacts, history }) => {
  const handleAddNewContactClick = () => {
    history.push('/contacts/new');
  };

  const handleContactClick = (e) => {
    const clickedTableRow = e.target.closest('tr');
    history.push(`/contacts/${clickedTableRow.dataset.contactId}`);
  };

  return (
    <div className="container">
      <div className="row contacts-header">
        <div className="col-md-4 offset-md-4" align="center">
          <h1>Your Contacts</h1>
          <button
            type="button"
            className="btn btn-info btn-lg"
            onClick={handleAddNewContactClick}
          >
            Add New Contact
          </button>
        </div>
      </div>

      <div className="row">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Profile Picture</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr
                key={c.id}
                data-contact-id={c.id}
                onClick={(e) => handleContactClick(e)}
              >
                <td>{c.name}</td>
                <td>
                  <img
                    src={c.pictureUrl}
                    alt=""
                    width="250"
                    onError={(e) => {
                      e.target.src =
                        'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
                      e.onError = null;
                    }}
                  />
                </td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

YourContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  history: PropTypes.any,
};

export default YourContacts;

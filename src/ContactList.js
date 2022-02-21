import { Link } from 'react-router-dom'

const ContactList = ({contacts}) => (
  <div>
  <div className="page-header">
    <h1>Contacts</h1>
    <Link className="btn btn-warning"
        role="button"
        to={'/new-contact'}>
        Add Contact <i className="fa fa-address-card"></i>
  </Link>
  </div>  
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {
      contacts.map(c => (        
        <div key={c.name} className="col">
          <div className="card text-white bg-dark mb-3 h-100">
            <img className="card-img-top" src={c.img_url}  
            alt="Contact Avatar"/>
            <div className="card-header bg-info h-100 d-flex flex-column justify-content-end">
              <h3 className="card-title">{c.name}</h3>
              <p className="card-text"><strong><i className="fa fa-envelope"></i>  </strong>{c.email}</p>
              <p className="card-text"><strong><i className="fa fa-phone"></i>  </strong>{c.phone}</p>
              <Link className=" btn btn-warning btn-sm"
                role="button"
                to={`/${c.name}`}>
                  View Details
              </Link>
            </div>
          </div>            
        </div>          
        ))}
    </div>
  </div>
)

export default ContactList

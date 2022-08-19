import { Link } from 'react-router-dom'

const FullList = ({contacts}) => (
<div>
  <header>
    <h1>My Contact List</h1>
  </header>
  <div className='container'>
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col-md-4"></th>
        <th scope="col-md-2">Name</th>
        <th scope="col-md-2">Number</th>
        <th scope="col-md-2">Email</th>
      </tr>
    </thead>
    <tbody>
        {
        contacts.map(c => (
            <tr key={c.id}>
                <td colSpan="1" scope="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                            <Link to={`/contacts/${c.id}`}>
                                <img className="img-thumbnail" src={c.imageURL}></img>
                            </Link>
                            </div>
                        </div>
                    </div>
                </td>

                <td colSpan="1"><div className="col-md-2 col-sm-2"><Link to={`/contacts/${c.id}`}>{c.name}</Link> </div></td>
                <td colSpan="1"><div className="col-md-2 col-sm-2">{c.number}</div></td>
                <td colSpan="1"><div className="col-md-2 col-sm-2">{c.email}</div></td>
            </tr>
        ))
      }
    </tbody>
  </table>
  </div>

  <div>
    <button type="button" className="btn btn-lg btn-link btn-block"><Link to="/contacts/new">Add a New Contact</Link></button>
  </div>
</div>
)

export default FullList
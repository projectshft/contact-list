import { Link } from 'react-router-dom'

const FullList = ({contacts}) => (
<div>
  <header>
    <h1>Welcome to My Contact List!</h1>
  </header>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Number</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
        {
        contacts.map(c => (
            <tr>
                <th colSpan="2" scope="row" key={c.id}>
                    <div className="container w-50 p-3">
                        <img className="img-thumbnail" src={c.imageURL}></img>
                    </div>
                </th>
                <td colspan="1"><Link to={`/contacts/${c.id}`}>{c.name}</Link></td>
                <td colspan="1">{c.number}</td>
                <td colspan="1">{c.email}</td>
            </tr>
        ))
      }
    </tbody>
  </table>
  <div>
    <button type="button" className="btn btn-lg btn-link btn-block"><Link to="/contacts/new">Add a New Contact</Link></button>
  </div>
</div>
)

export default FullList
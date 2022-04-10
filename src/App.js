import { Route, Routes} from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import New from './components/New';
import ViewContact from './components/ViewContact';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactsAPI = {
  contacts: [
    { 
      img_url: 'https://cdn3.whatculture.com/images/2021/04/d81733f712331d8a-1200x675.jpg', 
      first: 'Michael', 
      last: 'Scott',
      email: 'michael@dundermifflin.com',
      phone: '029-293-6004'
    },
    {
      img_url: 'https://bloximages.chicago2.vip.townnews.com/chetekalert.com/content/tncms/assets/v3/editorial/3/69/369f8f0e-e53e-11e9-9649-435ff75d3d94/5d94e57817024.image.jpg?crop=341%2C493%2C99%2C57', 
      first: 'Natalie', 
      last: 'Poppe',
      email: 'nattipop815@gmail.com',
      phone: '715-642-1146'
    }
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = p => p.number === id;
    return this.contacts.find(isContact);
  }
};

const Contacts = () => {
  return (
    <div>
      <h1 className='padding'>Contact List</h1>
      <button className="btn-primary"><Link to="/contacts/new" className="add-button" type='btn btn-primary'>Add Contact</Link></button>
      <table className="table table-striped table-bordered" id="contacts-table">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          {ContactsAPI.all().map(p => (
            <tr key={p.index}>
              <th scope="row">
                <img src={p.img_url} alt="profile pic here" width="200"></img>
              </th>
              <td>{p.first}</td>
              <td>{p.last}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/contacts/*" element={<Contacts />}/>
        <Route path="/contacts/new" element={<New />}/>
        <Route path="/:id" element={<ViewContact />}/>
      </Routes>
    </div>
  );
}

export default App;

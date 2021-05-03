import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Contact list</h1>
    <Link to='/contactNew' class="btn btn-primary search">Add Contact</Link>
    
    <div class='container'>
          <div class='row'>
            <div class='col-md-3'>
                <h3>Profile Pic</h3>
                <h3>Name</h3>
                <h3>Email</h3>
                <h3>Phome Number</h3>
             </div>
          </div>
     </div>
    
  </div> 
 
)

export default Home;


import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Welcome to your contacts!!</h1>
    <Link to='/Roster'><button type="button"> Contact List </button></Link>

  </div>
)

export default Home
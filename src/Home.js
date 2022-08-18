import { Link } from "react-router-dom"
const Home = () => (
    <div>
      <h1>Welcome to My Contact List!</h1>
      <button><Link to='/contacts'>Contacts</Link></button>
    </div>
  )

  export default Home
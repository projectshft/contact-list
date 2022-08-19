import { Link } from "react-router-dom"
const Home = () => (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Welcome to My Contact List!</h1>
      <br />
      <button className="btn btn-lg btn-link btn-block">
        <Link to='/contacts'>Go to Contacts</Link>
      </button>
    </div>
  </div>
  )

  export default Home
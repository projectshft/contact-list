import { Switch, Route } from 'react-router-dom'
import ContactsList from './ContactsList'
import ContactNew from './ContactNew'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <h1>Welcome to Contacts List!</h1>
    <Link to='/contacts'>Contacts</Link>
    </div>
    

  )
}

export default Home
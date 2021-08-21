import { Switch, Route } from 'react-router-dom'
import ContactsList from './ContactsList'
import ContactNew from './ContactNew'


const Home = ({contacts, addContact}) => (
  <Switch>
     <Route exact path='/' render={() => (
      <ContactsList contacts={contacts} />
     )} />
  </Switch>
)

export default Home
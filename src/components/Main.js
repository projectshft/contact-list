import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Form from './AddContactForm';
import Contact from './Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Contact} />
      <Route path="/form" component={Form} />
    </Switch>
  </main>
);

export default Main;
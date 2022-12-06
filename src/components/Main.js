import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Form from './AddContactForm';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </Switch>
  </main>
);

export default Main;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
} from 'react-router-dom';
import Home from './components/home';
import New from './components/new';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          {/*   <ul>
            <li>
              <Link to="/new">New</Link>
            </li>
            <li>
              <Link to="/">Home/Contact-list</Link>
            </li>
          </ul> 
          <hr /> */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/contacts" />
            </Route>
            <Route exact path="/contacts" component={Home} />
            <Route path="/new" component={New} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Index = () => (
  <div>
    <h1>Contact List</h1>
    <Link to="/contacts/new" type="button" class="btn btn-primary">Add Contact</Link> 
  </div>
);

export default Index
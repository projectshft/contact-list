import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ContactNew = () => (
  <div>
    <h1>Add New Contact</h1>
    <Link to="/" type="button" class="btn btn-primary">Add Contact</Link> 
  </div>
);

export default ContactNew
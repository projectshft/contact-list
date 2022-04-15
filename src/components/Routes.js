import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={ContactList} />
                <Route path="/new" component={ContactForm} />
                <Route exact path="/contacts/:id" render={routeProps => <Contact {...routeProps} />} />
                <Route path="/contacts/:id/edit" render={routeProps => <ContactForm {...routeProps} />} />
            </Switch>
        </main>
    )
}

export default Routes;
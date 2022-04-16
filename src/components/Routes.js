import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Contact';
import { ContactsContext } from '../contacts-context';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" render={routeProps => <ContactList {...routeProps} />} />
                <Route exact path="/new" render={routeProps => <ContactForm edit={false} />} />
                <Route exact path="/contacts/:id" render={routeProps => <Contact {...routeProps} />} />
                <Route exact path="/contacts/:id/edit" 
                    render={routeProps => 
                        <ContactsContext.Consumer>
                            {({findContact}) => {
                                let contact = findContact(routeProps.match.params.id);
                                if(contact) {
                                    return <ContactForm edit={true} {...routeProps} contact={contact} /> 
                                } else {
                                    return <Redirect to="/" />
                                }                                
                            }}
                        </ContactsContext.Consumer>} 
                />
                <Redirect to="/"/>
            </Switch>
        </main>
    )
}

export default Routes;
import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import { ContactsContext } from '../contacts-context';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Routes = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={ContactList} />
                <Route path="/new" render={routeProps => <ContactForm edit={false} />} />
                <Route exact path="/contacts/:id" render={routeProps => <Contact {...routeProps} />} />
                {/* <Route path="/contacts/:id/edit" render={routeProps => <ContactForm {...routeProps} />} /> */}
                <Route path="/contacts/:id/edit" 
                    render={routeProps => 
                        <ContactsContext.Consumer>
                            {({findContact}) => {
                                let contact = findContact(routeProps.match.params.id);
                                console.log(contact);
                                return <ContactForm edit={true} {...routeProps} contact={contact} />
                            }}
                        </ContactsContext.Consumer>} 
                />
            </Switch>
        </main>
    )
}

export default Routes;
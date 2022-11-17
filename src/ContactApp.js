import { Routes, Route } from 'react-router-dom'
import ContactList from './ContactList'
import New from './New'

const ContactApp = ({contacts, addContact}) => (
    <Routes>
        <Route path='/ContactApp/New' element={<New />} />
        {/* <Route path='/ContactApp/:number' render={(routerProps) => (
            <Contact contactId={parseInt(routerProps.match.params.number, 10)} contacts={contacts} />
        )}/> */}
        <Route path='/ContactApp/ContactList' element={<ContactList contacts={contacts} />}  />
    </Routes>
)

export default ContactApp
import { useParams, Switch, Route } from 'react-router-dom';
import Edit from "./Edit"
import View from './View'


export default function SingleContact ({contacts, setContacts, deleteEntry}) {
  const { id } = useParams();
  const contactData = contacts.find(contact => Number(id) === contact.id)
  const editPath = '/contacts/' + contactData.id + '/edit';

  return (
    <Switch>
      <Route exact path='/contacts/:id'>
        <View contactData={contactData} editPath={editPath} deleteEntry={deleteEntry}></View>
      </Route>
      <Route exact path={editPath}>
        <Edit contacts={contacts} contactData={contactData} setContacts={setContacts}></Edit>
      </Route>
    </Switch>
      
    )
  }
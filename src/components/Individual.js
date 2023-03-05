import {useParams} from 'react-router-dom';
import { useContacts } from "./Context";

const ContactDetails = props => {
  let {id} = useParams();
  const myContacts = useContacts()
  console.log(myContacts.get(id))


  return (
<div className="contactDetails">
  {id}
</div>
  );
};
 
export default ContactDetails;
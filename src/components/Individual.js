import {useParams} from 'react-router-dom';
import { useContacts } from "react";

const ContactDetails = () => {
let {id} = useParams();



  return (
<div className="contactDetails">ID: {id}</div>
  );
};
 
export default ContactDetails;
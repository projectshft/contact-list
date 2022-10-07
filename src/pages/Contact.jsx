import { useParams } from 'react-router-dom';

export default function Contact() {
  const { contactId } = useParams();
  return <div>This is {contactId} contact</div>;
}

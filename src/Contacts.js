import ContactsList from './ContactsList';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ButtonStyle = styled.ul`
a {
  text-decoration: none;
  color:white;
}
margin-bottom:0;

`;

const Contacts = ({ contacts, addContact }) => (
  <>
    <ContactsList contacts={contacts} />
    <div className="d-grid gap-2">
      <Button>               
        <ButtonStyle>
          <Link to={'/contacts/new'}>
          <strong>Add New Contact</strong>
          </Link>
        </ButtonStyle>
      </Button>
    </div>
  </>
)

export default Contacts;

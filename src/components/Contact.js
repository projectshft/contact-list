import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

export default function Contact({getContact}) {
  // Get all contact routes
  // Get current location path
  // if path doesn't match any of the list of contact routes, redirect to 404 page
  // else, render
  const navigate = useNavigate();
  const location = useLocation();

  const currentContactId = location.pathname.replace(/^\//, "");

  // console.log(currentContactId); // testing

  useEffect(() => {
    if (!getContact(currentContactId)) {
      const pageRedirect = setTimeout(() => navigate("/"), 3000)

      return () => {
        clearTimeout(pageRedirect);
      }
    }
  }, [getContact, currentContactId, navigate]);

   if (!getContact(currentContactId)) {
    return <NotFound />;
  }

  const contact = getContact(currentContactId);
  console.log(contact);

  return (
    <>
    <div className="d-flex flex-wrap">
      <div className="p-2">
        <img src={contact.profilePicture} alt="contact photo" className="img-thumbnail custom-img" />
      </div>
      <div className="p-2">
        <h1>{contact.name}</h1> 
        <h3>{contact.phone}</h3>
        {contact.email ? <p><strong>Email: </strong><a href={`mailto:${contact.email}`}>{contact.email}</a></p> : ""}
      </div>
    </div>
    </>
  );
}


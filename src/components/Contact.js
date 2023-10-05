import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NotFound from "./NotFound";

export default function Contact({getContact}) {
  // Get all contact routes
  // Get current location path
  // if path doesn't match any of the list of contact routes, redirect to 404 page
  // else, render
  const navigate = useNavigate();
  const location = useLocation();

  let currentContactId = "undefined";
  if (location.state) {
    currentContactId = location.state.contactId; // we need to use location.pathname -- this will prevent our contacts from disappearing after they're created...
  }

  console.log(location);

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

  return (
    <>
      <h1>Contact Name</h1>
      {location.state.name}
    </>
  );
}


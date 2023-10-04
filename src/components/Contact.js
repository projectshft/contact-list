import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NotFound from "./NotFound";

export default function Contact() {
  // Get all contact routes
  // Get current location path
  // if path doesn't match any of the list of contact routes, redirect to 404 page
  // else, render
  const navigate = useNavigate();

  const contactsExample = [
    {
      name: "Jack",
      phone: "555",
      email: "email",
      profilePicture: "pofaf",
      pathname: "/contacts/1"
    },
    {
      name: "Phil",
      phone: "555",
      email: "email",
      profilePicture: "pofaf",
      pathname: "/contacts/2"
    },
    {
      name: "George",
      phone: "555",
      email: "email",
      profilePicture: "pofaf",
      pathname: "/contacts/3"
    }
  ];

  useEffect(() => {
    if (contactsExample.filter(element => element.pathname === location.pathname).length <= 0) {
      setTimeout(() => navigate(-1), 3000)
    }
  }, []);

  const location = useLocation();
  console.log(location.pathname); // receives data from create new contact page
  
  if (contactsExample.filter(element => element.pathname === location.pathname).length <= 0) {
    return <NotFound />;
  }

  return (
    <>
      <h1>Contact Name</h1>
      {/* {location.state.name} */}
    </>
  );
}


import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  console.log(location); // receives data from creat new contact page
  return (
    <>
      <h1>Contact Name</h1>
      {/* {location.state.name} */}
    </>
  )
}
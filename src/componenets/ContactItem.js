import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const ContactItem = ( ) => {
  const { state } = useLocation()
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/contacts");
  }

  if (state) {
    return (
      <div className="text-center mt-5">
        <img className="contactPhoto" src={state.image_url} alt="A photo of the contact" />
        <div>{state.name}</div>
        <div>{state.phone_number}</div>
        <div>{state.email}</div>
        <hr />
        <button className='btn btn-dark' onClick={goBack} type="button" value="Submit">Go Back</button>
      </div>
    );
  } else {
    return (
      <NotFound />
    )
  }
};

export default ContactItem;
import { useParams, useLocation, useNavigate } from "react-router-dom";

const ContactItem = (props) => {
  const { state } = useLocation()
  const { id } = useParams();
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
      <h2>👋 I am a contact (id # {id})</h2>
    )
  }
};

export default ContactItem;
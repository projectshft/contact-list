import { useParams } from "react-router-dom";

const ContactItem = (props) => {
  const { id } = useParams()
  return (
    <>
      <h2>👋 I am a Contact {id}</h2>
      <br />
    </>
  );
};

export default ContactItem;
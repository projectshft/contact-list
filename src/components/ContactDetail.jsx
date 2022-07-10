import { object, PropTypes } from 'prop-types';
import { useParams, Link, Navigate } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((x) => x.id === +id);

  if (!contact) {
    return <Navigate to="notFound" />;
  }

  const { name, email, phone, image } = contact;

  return (
    <>
      <div className="flex-1 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center">{name}</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-x-6 p-4 text-gray-800">
          <div className="flex justify-center md:justify-end pt-2">
            <span className="w-48 mb-4">
              <img src={image} alt="profile pic" className="rounded-lg" />
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex-col">
              <span className="flex justify-center md:justify-start items-center font-bold">
                Email:
              </span>
              <span className="flex justify-center md:justify-start items-center font-mono text-lg mb-2">
                {email}
              </span>
              <span className="flex justify-center md:justify-start items-center font-bold">
                Phone:
              </span>
              <span className="flex justify-center md:justify-start items-center font-mono text-lg">
                {phone}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link to="../contacts" className="flex items-center justify-center">
        <button
          type="submit"
          className="block bg-gray-800 text-white hover:bg-teal-300 rounded-md py-1 px-2 hover:text-gray-600"
        >
          Back to Contacts
        </button>
      </Link>
    </>
  );
};

ContactDetail.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
};

export default ContactDetail;

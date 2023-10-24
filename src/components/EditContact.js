import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';

export default function EditContact({ replaceContact, getContact }) {
  const location = useLocation();
  const navigate = useNavigate();

  const contactId = location.pathname.match(/contacts\/[a-z0-9]*/)[0];
  const contact = getContact(contactId);

  const [searchParams, setSearchParams] = useSearchParams({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    profilePicture: contact.profilePicture,
  });

  const data = {
    name: searchParams.get('name'),
    phone: searchParams.get('phone'),
    email: searchParams.get('email'),
    profilePicture: searchParams.get('profilePicture'),
    contactId: contact.contactId,
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">Edit contact</h1>
      <div className="row justify-content-md-center">
        <form className="col-md-8">
          <div className="mb-2">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={data.name}
              onChange={(event) =>
                setSearchParams(
                  (prev) => {
                    prev.set('name', event.target.value);
                    return prev;
                  },
                  { replace: true }
                )
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phoneInput" className="form-label">
              Phone Number
            </label>
            <PhoneInput
              className="form-control"
              id="phoneInput"
              defaultCountry="US"
              placeholder="Enter a phone number"
              value={data.phone}
              onChange={(event) => {
                setSearchParams(
                  (prev) => {
                    prev.set('phone', event);
                    return prev;
                  },
                  { replace: true }
                );
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={data.email}
              onChange={(event) =>
                setSearchParams(
                  (prev) => {
                    prev.set('email', event.target.value);
                    return prev;
                  },
                  { replace: true }
                )
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="profilePicture" className="form-label">
              Profile Picture URL
            </label>
            <input
              type="url"
              className="form-control"
              id="profilePicture"
              value={data.profilePicture}
              onChange={(event) =>
                setSearchParams(
                  (prev) => {
                    prev.set('profilePicture', event.target.value);
                    return prev;
                  },
                  { replace: true }
                )
              }
            />
          </div>
          <button
            type="button"
            onClick={() => {
              replaceContact(data);
              navigate(`/${data.contactId}`);
            }}
            className="btn btn-success me-2"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => {
              navigate(`/${data.contactId}`);
            }}
            className="btn btn-secondary"
          >
            Discard
          </button>
        </form>
      </div>
    </div>
  );
}

EditContact.propTypes = {
  replaceContact: PropTypes.func,
  getContact: PropTypes.func,
};

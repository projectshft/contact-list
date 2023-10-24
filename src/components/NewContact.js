import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function NewContact({ addContact }) {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams({
    name: location.state || '',
    phone: '',
    email: '',
    profilePicture: '',
  });

  const navigate = useNavigate();

  const generateId = () => Math.round(Math.random() * 100000000).toString(36);

  const data = {
    name: searchParams.get('name'),
    phone: searchParams.get('phone'),
    email: searchParams.get('email'),
    profilePicture: searchParams.get('profilePicture'),
    contactId: `contacts/${generateId()}`,
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">Create a new contact</h1>
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
              required
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
            type="submit"
            onClick={() => {
              addContact(data);
              navigate(`/${data.contactId}`);
            }}
            className="btn btn-primary"
          >
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
}

NewContact.propTypes = {
  addContact: PropTypes.func,
};

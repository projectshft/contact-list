import { useHistory } from 'react-router-dom';
import ContactList from './contact-list';

export default function Home() {
  const history = useHistory();

  function handleNewContactClick() {
    history.push('/new');
  }
  return (
    <div>
      <div className="display-4 text-center">Contact List</div>
      <hr />
      <div className="row justify-content-md-center">
        <div className="col-md-8 self-align-center">
          <div>
            <button
              onClick={handleNewContactClick}
              type="button"
              className="btn btn-primary"
            >
              Add Contact
            </button>
          </div>
        </div>
      </div>
      <ContactList />
    </div>
  );
}

import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Accordion from './Accordion';

export default function Sidebar({ contacts }) {
  const allContacts = contacts;
  const favContacts = contacts;
  const googleContacts = contacts;

  const accordionData = [
    { header: 'All Contacts', content: allContacts },
    { header: 'Favorites', content: favContacts },
    { header: 'Google', content: googleContacts },
  ];

  return (
    <div className="flex flex-col justify-start bg-white my-2 ml-3">
      <div className="m-2">
        <SearchBar />
      </div>
      <div className="overflow-scroll">
        {accordionData.map(({ header, content }) => (
          <div key={header} className="max-h-80 overflow-scroll">
            <Accordion header={header} content={content} />
          </div>
        ))}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.array.isRequired,
};

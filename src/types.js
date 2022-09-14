import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

export const ContactType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: urlPropType.isRequired,
});

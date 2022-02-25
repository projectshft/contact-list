import PropTypes from 'prop-types';


const ContactRow = (props) => {
  return (
    <>
    <td className="align-middle">{props.name}</td>
    <td>
      <img src={props.image_url} className='rounded-pill' style={{ maxWidth: '15rem'}}></img>
    </td>
    <td className="align-middle">{props.email}</td>
    <td className="align-middle">{props.phone_number}</td>
    </>
  )
}

ContactRow.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  email: PropTypes.string,
  phone_number: PropTypes.number,

}

export default ContactRow
import Header from './Header';
import { Link } from 'react-router-dom';

const Info = ({ contacts }) => {
  const empty = () => {
    contacts = [];
  }//tried to empty contacts so multiple wouldn't display - didn't work 

  return (
    <>
      <Header />
      <div className="row justify-content-md-center">
        <div className="col-md-5 d-flex justify-content-center contact">
          {
            contacts.map(p => (
              <div key={p.name}>
                <img src={p.url} alt="" className="img box" />
                <h6><strong>Name: </strong>{p.name}</h6>
                <h6><strong>Email: </strong>{p.email}</h6>
                <h6><strong>Phone: </strong>{p.phone}</h6>
              </div>
              ))
            }
        </div>
      </div> 
      <div className='row col-sm-1 offset-md-3'>
        <Link onClick={empty}to='/contacts' className='btn btn-primary'>Back</Link>
      </div>
    </>  
  )
}

export default Info;

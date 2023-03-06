import {useParams} from 'react-router-dom';
import { useContacts } from "./Context";

const ContactDetails = () => {
  let {id} = useParams();
  let number = id
  console.log(number)
  const myContacts = useContacts()
  const individual = myContacts[id]
  console.log(individual)


  return (
<div className="contactDetails">
    <div className="moreInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="col-md-4">
                  <img className='userPhoto' src={individual.image} alt=""/>
                </div>
                <div className="col-md-7">
                  <ul className="list-group">
                    <li className ="list-group-item list-group-list-item-action"><strong>Name:</strong>  {individual.name}</li>
                    <li className ="list-group-item list-group-list-item-action"><strong>Phone:</strong>  {individual.phone}</li>
                    <li className ="list-group-item list-group-list-item-action"><strong>Email:</strong>  {individual.email}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};
 
export default ContactDetails;
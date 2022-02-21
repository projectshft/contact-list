import React from 'react';
import { useParams, Link } from 'react-router-dom';
import _ from 'lodash'

const Contact = ({contacts}) => {
  
  let params = useParams(); 
  const contact = _.find(contacts, { id: parseInt(params.id, 10)});
  
  if (!contact) {
    return (
      <div>
        <p>Sorry, but the contact was not found</p>
        <Link to='/'>Back</Link>
      </div>
      
    )
  }
  
  return (
    <div className="col-md-3 offset-md-4">
      <div className="row">
      <Link to='/'>Back</Link>
        <table className="table table-bordered">
            <tbody>      
              <tr>
                <td className="w-25"><img src={contact.image_url} alt="prof pic"/></td>
              </tr> 
              <tr>
                <td className="text-center">
                  <h5>{contact.name}</h5>
                  <h6>{contact.phone}</h6>
                  <h6>{contact.email}</h6>
                </td>
              
              </tr>             
            </tbody>    
          </table>
          
        </div>
      </div>
  )
}

export default Contact
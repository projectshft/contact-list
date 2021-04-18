import { Link } from 'react-router-dom';

export default function View ({contactData, editPath, deleteEntry}) {

  
  return (
    <div>
          <div className='row'>
            <div className='offset-md-2 col-sm-6'>
              <table className='table table-dark'>
                <tbody>
                  <tr>
                    <th></th>
                    <td>
                    <img src={contactData.image_url} alt='' style={{maxWidth: '100%'}}></img>
                    </td>
                  </tr>
                  <tr>
                    <th>name</th>
                    <td>{contactData.name}</td>
                  </tr>
                  <tr>
                    <th>email</th>
                    <td>{contactData.email}</td>
                  </tr>
                  <tr>
                    <th>phone</th>
                    <td>{contactData.phone_number}</td>
                  </tr>
                  <tr>
                    <th>imageUrl</th>
                    <td>{contactData.image_url}</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <Link to={editPath}>
                        <button className = "btn-primary btn btn-sm">edit</button>
                      </Link>
                      <Link to='/'>
                        <button data-remove= {contactData.id} onClick={deleteEntry} className = "btn-danger btn btn-sm">delete</button>
                      </Link>
                      <Link to='/'>
                        <button className = "btn-warning btn btn-sm">back</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}
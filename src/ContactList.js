import React from 'react'

export default function ContactList() {
  return (
    <>
      <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Profile Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img 
                  src="https://pbs.twimg.com/profile_images/1364965517526769664/5fwOCY83_400x400.jpg"
                  alt="new"
                  height="150"
                />
              </td>
              <td>Aaron Hayslip</td>
              <td>amhayslip@gmail.com</td>
              <td>5555555555</td>
              <td>
                <button 
                  className="btn btn-sm btn-outline-info"
                >Edit Contact</button>
                <button 
                  className="btn btn-sm btn-outline-danger"
                >Delete Contact</button>
              </td>
            </tr>
            <tr>
              <td>
                <img 
                  src="https://pbs.twimg.com/profile_images/1364965517526769664/5fwOCY83_400x400.jpg"
                  alt="new"
                  height="150"
                />
              </td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>5555555555</td>
              <td>
                <button 
                  className="btn btn-sm btn-outline-info"
                >Edit Contact</button>
                <button 
                  className="btn btn-sm btn-outline-danger"
                >Delete Contact</button>
              </td>
            </tr>
          </tbody>
        </table>
    </>
  )
}
